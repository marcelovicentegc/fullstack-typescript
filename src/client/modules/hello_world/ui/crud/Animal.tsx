import * as React from "react";
import { Query } from "react-apollo";
import { getAnimal } from "../../../../../server/schema/graphql/Queries.graphql";
import {
  GetAnimalQuery,
  GetAnimalVariables
} from "../../../../__types__/typeDefs";
import { Loading } from "../misc/Loading";
import { NoData } from "../misc/NoData";
import { DeleteAnimal } from "./DeleteAnimal";
import { UpdateAnimal } from "./UpdateAnimal";

interface Props {
  selected: string;
  to: string;
}

export class Animal extends React.Component<Props> {
  public render() {
    return (
      <Query<GetAnimalQuery, GetAnimalVariables>
        query={getAnimal}
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
