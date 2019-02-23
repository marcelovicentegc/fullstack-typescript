import * as React from "react";
import { Query } from "react-apollo";
import { getAnimals } from "../../../../../server/schema/graphql/Queries.graphql";
import { GetAnimalsQuery } from "../../../../__types__/typeDefs";
import Loading from "../misc/Loading";
import NoData from "../misc/NoData";
import Animal from "./Animal";

interface Props {
  to: string;
}

export default class ListAnimals extends React.Component<Props> {
  state = {
    species: "",
    favoriteFood: "",
    selected: "",

    displayList: true,
    mutation: false
  };

  handleMutation() {
    !this.state.mutation ? this.setState({ mutation: true }) : null;
  }

  render() {
    return (
      <>
        {!this.state.mutation ? (
          <>
            <p>Select the animal you wish to {this.props.to}:</p>
            <Query<GetAnimalsQuery> query={getAnimals}>
              {({ data, loading }) => {
                if (loading) return <Loading />;
                if (!data || data.animals.length === 0) return <NoData />;
                return this.state.displayList ? (
                  <>
                    {data.animals.map((animal, i) => (
                      <div
                        key={i}
                        id={animal.id}
                        className="animal"
                        onClick={e => {
                          this.setState({ selected: animal.id });
                          this.handleMutation();
                        }}
                      >
                        {animal.species}
                      </div>
                    ))}
                  </>
                ) : null;
              }}
            </Query>
          </>
        ) : this.props.to === "update" ? (
          <Animal selected={this.state.selected} to={this.props.to} />
        ) : (
          <Animal selected={this.state.selected} to={this.props.to} />
        )}
      </>
    );
  }
}
