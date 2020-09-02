import { observer } from "mobx-react";
import * as React from "react";
import { Mutation } from "react-apollo";
import { rootStoreContext } from "../../../../../stores/RootStore";
import * as style from "./main.scss";
import { Button } from "../Button";
import {
  CreateAnimalMutation,
  CreateAnimalMutationVariables,
  CreateAnimalDocument,
} from "../../../../../gql";

export const CreateAnimal: React.FunctionComponent = observer(() => {
  const [submitting, setSubmitting] = React.useState(false);
  const { animalsStore, errorStore } = React.useContext(rootStoreContext);

  return (
    <Mutation<CreateAnimalMutation, CreateAnimalMutationVariables>
      mutation={CreateAnimalDocument}
    >
      {(mutate) => (
        <>
          <p>What is your favorite animal's favorite food?</p>
          <form>
            <div className={style.field}>
              <label>Species:</label>
              <input
                type="text"
                placeholder="Magic mushrooms"
                onChange={(e) => (animalsStore.species = e.target.value)}
              />
            </div>
            <div className={style.field}>
              <label>Favorite food:</label>
              <input
                type="text"
                placeholder="Dead plants"
                onChange={(e) => (animalsStore.favoriteFood = e.target.value)}
              />
            </div>
            <div className={style.buttonWrapper}>
              <Button
                label={submitting ? "Creating..." : "Create"}
                onClick={async () => {
                  setSubmitting(true);
                  await mutate({
                    variables: {
                      species: animalsStore.species,
                      favoriteFood: animalsStore.favoriteFood,
                    },
                  })
                    .catch((error) => errorStore.setErrorMessage(error.message))
                    .finally(() => {
                      setSubmitting(false);
                    });
                }}
              />
            </div>
          </form>
        </>
      )}
    </Mutation>
  );
});
