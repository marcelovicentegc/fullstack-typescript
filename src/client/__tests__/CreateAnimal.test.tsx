import { shallow } from "enzyme";
import * as React from "react";
import { Mutation } from "react-apollo";
import { createAnimal } from "../../server/schema/graphql/Mutations.graphql";
import { CreateAnimal } from "../modules/hello_world/ui/crud/CreateAnimal";
import { AnimalsStore } from "../stores";
import {
  CreateAnimalMutation,
  CreateAnimalVariables
} from "../__types__/typeDefs";
import { rootStore } from "../stores/RootStore";

describe("CreateAnimal suite", () => {
  const animalsStore = new AnimalsStore(rootStore);

  const wrapper = shallow(<CreateAnimal />);
  it("Should render without throwing an error", () => {
    wrapper.contains(
      <Mutation<CreateAnimalMutation, CreateAnimalVariables>
        mutation={createAnimal}
      >
        {mutate => (
          <>
            <p>What is your favorite animal's favorite food?</p>
            <form>
              <div className="field">
                <label>Species:</label>
                <input
                  type="text"
                  placeholder="Magic mushrooms"
                  onChange={e => (animalsStore.species = e.target.value)}
                />
              </div>
              <div className="field">
                <label>Favorite food:</label>
                <input
                  type="text"
                  placeholder="Dead plants"
                  onChange={e => (animalsStore.favoriteFood = e.target.value)}
                />
              </div>
              <div className="button-wrapper">
                <button
                  className="button"
                  onClick={async () => {
                    await mutate({
                      variables: {
                        species: animalsStore.species,
                        favoriteFood: animalsStore.favoriteFood
                      }
                    });
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </Mutation>
    );
  });
});
