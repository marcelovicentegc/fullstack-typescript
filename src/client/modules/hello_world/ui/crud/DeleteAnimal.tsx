import * as React from "react";
import { Mutation } from "react-apollo";
import { deleteAnimal } from "../../../../../server/schema/graphql/Mutations.graphql";
import {
  DeleteAnimalMutation,
  DeleteAnimalVariables,
  GetAnimalAnimal
} from "../../../../__types__/typeDefs";

interface Props {
  animal: GetAnimalAnimal;
}

export class DeleteAnimal extends React.Component<Props> {
  public render() {
    return (
      <>
        <Mutation<DeleteAnimalMutation, DeleteAnimalVariables>
          mutation={deleteAnimal}
        >
          {mutate => (
            <>
              <button
                className="button"
                onClick={async () => {
                  await mutate({
                    variables: {
                      id: this.props.animal.id
                    }
                  }).then(() => window.location.reload());
                }}
              >
                <span>Submit</span>
              </button>
            </>
          )}
        </Mutation>
      </>
    );
  }
}
