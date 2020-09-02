import { IResolvers } from "graphql-tools";
import { getConnection } from "typeorm";
import { Animal } from "../../database/entities";
import { QueryResolvers, MutationResolvers } from "../../gql";

const queries: QueryResolvers = {
  animal: async (_, { id }) => await Animal.findOne(id),
  animals: async () => await Animal.find(),
};

const mutations: MutationResolvers = {
  createAnimal: async (_, { species, favoriteFood }) => {
    const animal = Animal.create({
      species,
      favoriteFood,
    });
    await animal.save();
    return animal;
  },
  updateAnimal: async (_, { id, ...args }) => {
    try {
      await Animal.update(id, args);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
  deleteAnimal: async (_, { id }) => {
    try {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Animal)
        .where("id = :id", { id })
        .execute();
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
};

export const animals: IResolvers = {
  Query: { ...queries },
  Mutation: { ...mutations },
};
