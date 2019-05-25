import { shallow } from "enzyme";
import * as React from "react";
import { Mutation } from "react-apollo";
import { updateAnimal } from "../../server/schema/graphql/Mutations.graphql";
import UpdateAnimal from "../modules/hello_world/ui/crud/UpdateAnimal";
import { AnimalsStore } from "../stores";
import {
  UpdateAnimalMutation,
  UpdateAnimalVariables
} from "../__types__/typeDefs";

describe("UpdateAnimal suite", () => {
  const props = {
    animal: {
      id: "1",
      species: "Magic mushroom",
      favoriteFood: "Dead plants"
    },
    animalsStore: new AnimalsStore(this)
  };

  it("Should render without throwing an error", () => {
    expect(
      shallow(<UpdateAnimal {...props} />).contains(
        <>
          <Mutation<UpdateAnimalMutation, UpdateAnimalVariables>
            mutation={updateAnimal}
          >
            {mutate => (
              <form>
                <div className="field">
                  <label>Species:</label>
                  <input
                    type="text"
                    placeholder={props.animal.species}
                    onChange={e =>
                      (props.animalsStore.species = e.target.value)
                    }
                  />
                </div>
                <div className="field">
                  <label>Favorite food:</label>
                  <input
                    type="text"
                    placeholder={props.animal.favoriteFood}
                    onChange={e =>
                      (props.animalsStore.favoriteFood = e.target.value)
                    }
                  />
                </div>
                <div className="button-wrapper">
                  <button
                    className="button"
                    onClick={async () => {
                      await mutate({
                        variables: {
                          id: props.animal.id,
                          species: props.animalsStore.species,
                          favoriteFood: props.animalsStore.favoriteFood
                        }
                      });
                    }}
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            )}
          </Mutation>
        </>
      )
    );
  });
});
