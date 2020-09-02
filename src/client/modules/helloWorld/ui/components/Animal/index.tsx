import * as React from "react";
import { Query } from "react-apollo";
import { Loading } from "../Loading";
import { NoData } from "../NoData";
import { DeleteAnimal } from "../DeleteAnimal";
import { UpdateAnimal } from "../UpdateAnimal";
import {
  GetAnimalQuery,
  GetAnimalQueryVariables,
  GetAnimalDocument,
} from "../../../../../gql";

interface Props {
  selected: string;
  to: string;
}

export class Animal extends React.Component<Props> {
  public render() {
    return (
      <Query<GetAnimalQuery, GetAnimalQueryVariables>
        query={GetAnimalDocument}
        variables={{ id: this.props.selected }}
      >
        {({ data, loading }) => {
          if (loading) return <Loading />;
          if (!data) return <NoData />;
          return this.props.to === "update" ? (
            <UpdateAnimal animal={data.animal} />
          ) : (
            <DeleteAnimal animal={data.animal} />
          );
        }}
      </Query>
    );
  }
}
