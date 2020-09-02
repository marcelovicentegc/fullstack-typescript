import * as React from "react";
import { Mutation } from "react-apollo";
import { Button } from "../Button";
import {
  Animal,
  DeleteAnimalMutation,
  DeleteAnimalMutationVariables,
  DeleteAnimalDocument,
} from "../../../../../gql";

interface Props {
  animal: Animal;
}

export class DeleteAnimal extends React.Component<Props> {
  public render() {
    return (
      <>
        <Mutation<DeleteAnimalMutation, DeleteAnimalMutationVariables>
          mutation={DeleteAnimalDocument}
        >
          {(mutate) => (
            <Button
              onClick={async () => {
                await mutate({
                  variables: {
                    id: this.props.animal.id,
                  },
                }).then(() => window.location.reload());
              }}
              label={"Delete"}
            />
          )}
        </Mutation>
      </>
    );
  }
}
