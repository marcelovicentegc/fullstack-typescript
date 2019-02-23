import * as React from "react";
import { Mutation } from "react-apollo";
import { createAnimal } from "../../../../../server/schema/graphql/Mutations.graphql";
import {
  CreateAnimalMutation,
  CreateAnimalVariables
} from "../../../../__types__/typeDefs";
import "./main.css";

export default class CreateAnimal extends React.Component {
  state = {
    species: "",
    favoriteFood: ""
  };

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
                  onChange={e => this.setState({ species: e.target.value })}
                />
              </div>
              <div className="field">
                <label>Favorite food:</label>
                <input
                  type="text"
                  placeholder="Dead plants"
                  onChange={e =>
                    this.setState({ favoriteFood: e.target.value })
                  }
                />
              </div>
              <div className="button-wrapper">
                <button
                  className="button"
                  onClick={async () => {
                    await mutate({
                      variables: {
                        species: this.state.species,
                        favoriteFood: this.state.favoriteFood
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
