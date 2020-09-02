import { inject, observer } from "mobx-react";
import * as React from "react";
import { Mutation } from "react-apollo";
import { AnimalsStore } from "../../../../../stores";
import { Button } from "../Button";
import * as style from "./main.scss";
import {
  Animal,
  UpdateAnimalMutation,
  UpdateAnimalMutationVariables,
  UpdateAnimalDocument,
} from "../../../../../gql";

interface Props {
  animal: Animal;
  animalsStore?: AnimalsStore;
}

@inject("animalsStore")
@observer
export class UpdateAnimal extends React.Component<Props> {
  public render() {
    return (
      <>
        <Mutation<UpdateAnimalMutation, UpdateAnimalMutationVariables>
          mutation={UpdateAnimalDocument}
        >
          {(mutate) => (
            <form>
              <div className={style.field}>
                <label>Species:</label>
                <input
                  type="text"
                  placeholder={this.props.animal.species}
                  onChange={(e) =>
                    (this.props.animalsStore.species = e.target.value)
                  }
                />
              </div>
              <div className={style.field}>
                <label>Favorite food:</label>
                <input
                  type="text"
                  placeholder={this.props.animal.favoriteFood}
                  onChange={(e) =>
                    (this.props.animalsStore.favoriteFood = e.target.value)
                  }
                />
              </div>
              <div className={style.buttonWrapper}>
                <Button
                  label={"Update"}
                  onClick={async () => {
                    await mutate({
                      variables: {
                        id: this.props.animal.id,
                        species: this.props.animalsStore.species,
                        favoriteFood: this.props.animalsStore.favoriteFood,
                      },
                    });
                  }}
                />
              </div>
            </form>
          )}
        </Mutation>
      </>
    );
  }
}
