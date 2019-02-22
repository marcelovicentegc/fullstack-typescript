import { IResolvers } from "graphql-tools";
import { Animal } from "../database/entities/index";

const resolvers: IResolvers = {
  Query: {
    animal: (_, { id }) => Animal.findOne(id),
    animals: () => Animal.find()
  },
  Mutation: {
    createAnimal: async (_, { id, species, favoriteFood }) => {
      const animal = Animal.create({
        id: id,
        species: species,
        favoriteFood: favoriteFood
      });
      await animal.save();
      return true;
    },
    updateAnimal: async (_, { id, species, favoriteFood }) => {
      try {
        await Animal.update(id, species, favoriteFood);
      } catch (err) {
        return false;
      }
      return true;
    },
    deleteAnimal: async (_, { id }) => {
      try {
        await Animal.remove(id);
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    }
  }
};

export default resolvers;
