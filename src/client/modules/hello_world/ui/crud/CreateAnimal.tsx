import { observer } from "mobx-react-lite";
import * as React from "react";
import { Mutation } from "react-apollo";
import { createAnimal } from "../../../../../server/schema/graphql/Mutations.graphql";
import AnimalsStore from "../../../../stores/AnimalsStore.store";
import {
  CreateAnimalMutation,
  CreateAnimalVariables
} from "../../../../__types__/typeDefs";
import "./main.scss";

const CreateAnimal: React.FunctionComponent = observer(() => {
  const animalsStore = React.useContext(AnimalsStore);

  return (
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

export default CreateAnimal;
