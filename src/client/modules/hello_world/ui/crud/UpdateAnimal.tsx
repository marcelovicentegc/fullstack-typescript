import * as React from "react";
import { Mutation } from "react-apollo";
import { updateAnimal } from "../../../../../server/schema/graphql/Mutations.graphql";
import {
  GetAnimalAnimal,
  UpdateAnimalMutation,
  UpdateAnimalVariables
} from "../../../../__types__/typeDefs";

interface Props {
  animal: GetAnimalAnimal;
}

export default class UpdateAnimal extends React.Component<Props> {
  state = {
    species: "",
    favoriteFood: ""
  };

  render() {
    return (
      <Mutation<UpdateAnimalMutation, UpdateAnimalVariables>
        mutation={updateAnimal}
      >
        {mutate => (
          <form>
            <div className="field">
              <label>Species:</label>
              <input
                type="text"
                placeholder={this.props.animal.species}
                onChange={e => this.setState({ species: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Favorite food:</label>
              <input
                type="text"
                placeholder={this.props.animal.favoriteFood}
                onChange={e => this.setState({ favoriteFood: e.target.value })}
              />
            </div>
            <div className="button-wrapper">
              <button
                className="button"
                onClick={async () => {
                  await mutate({
                    variables: {
                      id: this.props.animal.id,
                      species: this.state.species,
                      favoriteFood: this.state.favoriteFood
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
    );
  }
}
