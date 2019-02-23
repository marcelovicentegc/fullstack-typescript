import * as React from "react";
import { Mutation } from "react-apollo";
import { deleteAnimal } from "../../../../../server/schema/graphql/Mutations.graphql";
import { getAnimals } from "../../../../../server/schema/graphql/Queries.graphql";
import {
  DeleteAnimalMutation,
  DeleteAnimalVariables,
  GetAnimalAnimal
} from "../../../../__types__/typeDefs";

interface Props {
  animal: GetAnimalAnimal;
}

export default class DeleteAnimal extends React.Component<Props> {
  render() {
    return (
      <Mutation<DeleteAnimalMutation, DeleteAnimalVariables>
        mutation={deleteAnimal}
        refetchQueries={[{ query: getAnimals }]}
        awaitRefetchQueries={true}
      >
        {mutate => (
          <>
            <button
              className="button"
              onClick={async () => {
                const response = await mutate({
                  variables: {
                    id: this.props.animal.id
                  }
                });
                console.log(response);
              }}
            >
              <span>Submit</span>
            </button>
          </>
        )}
      </Mutation>
    );
  }
}
