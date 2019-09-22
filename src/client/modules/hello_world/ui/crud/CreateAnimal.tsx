import { observer } from "mobx-react";
import * as React from "react";
import { Mutation } from "react-apollo";
import { createAnimal } from "../../../../../server/schema/graphql/Mutations.graphql";
import {
  CreateAnimalMutation,
  CreateAnimalVariables
} from "../../../../__types__/typeDefs";
import "./main.scss";
import { rootStoreContext } from "../../../../stores/RootStore";

export const CreateAnimal: React.FunctionComponent = observer(() => {
  const [submitting, setSubmitting] = React.useState(false);
  const { animalsStore, errorStore } = React.useContext(rootStoreContext);

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
                  setSubmitting(true);
                  await mutate({
                    variables: {
                      species: animalsStore.species,
                      favoriteFood: animalsStore.favoriteFood
                    }
                  })
                    .catch(error => errorStore.setErrorMessage(error.message))
                    .finally(() => {
                      setSubmitting(false);
                    });
                }}
              >
                <span>{submitting ? "Submitting..." : "Submit"}</span>
              </button>
            </div>
          </form>
        </>
      )}
    </Mutation>
  );
});
