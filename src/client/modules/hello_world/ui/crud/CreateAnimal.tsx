import { inject, observer } from "mobx-react";
import * as React from "react";
import { Mutation } from "react-apollo";
import { createAnimal } from "../../../../../server/schema/graphql/Mutations.graphql";
import { AnimalsStore } from "../../../../stores";
import {
  CreateAnimalMutation,
  CreateAnimalVariables
} from "../../../../__types__/typeDefs";
import "./main.css";

interface Props {
  animalsStore?: AnimalsStore;
}

@inject("animalsStore")
@observer
export default class CreateAnimal extends React.Component<Props> {
  render() {
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
                  onChange={e =>
                    (this.props.animalsStore.species = e.target.value)
                  }
                />
              </div>
              <div className="field">
                <label>Favorite food:</label>
                <input
                  type="text"
                  placeholder="Dead plants"
                  onChange={e =>
                    (this.props.animalsStore.favoriteFood = e.target.value)
                  }
                />
              </div>
              <div className="button-wrapper">
                <button
                  className="button"
                  onClick={async () => {
                    await mutate({
                      variables: {
                        species: this.props.animalsStore.species,
                        favoriteFood: this.props.animalsStore.favoriteFood
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
  }
}
