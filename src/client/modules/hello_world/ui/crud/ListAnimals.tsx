import { inject, observer } from "mobx-react";
import * as React from "react";
import { Query } from "react-apollo";
import { getAnimals } from "../../../../../server/schema/graphql/Queries.graphql";
import { AnimalsStore } from "../../../../stores";
import { GetAnimalsQuery } from "../../../../__types__/typeDefs";
import Loading from "../misc/Loading";
import NoData from "../misc/NoData";
import Animal from "./Animal";

interface Props {
  to: string;
  animalsStore?: AnimalsStore;
}

@inject("animalsStore")
@observer
export default class ListAnimals extends React.Component<Props> {
  handleMutation = () => {
    this.props.animalsStore.handleMutation();
  };

  render() {
    return (
      <>
        {!this.props.animalsStore.mutation ? (
          <>
            <p>Select the animal you wish to {this.props.to}:</p>
            <Query<GetAnimalsQuery> query={getAnimals}>
              {({ data, loading }) => {
                if (loading) return <Loading />;
                if (!data || data.animals.length === 0) return <NoData />;
                return this.props.animalsStore.displayList ? (
                  <>
                    {data.animals.map((animal, i) => (
                      <div
                        key={i}
                        id={animal.id}
                        className="animal"
                        onClick={() => {
                          this.props.animalsStore.selected = animal.id;
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
          <Animal
            selected={this.props.animalsStore.selected}
            to={this.props.to}
          />
        ) : (
          <Animal
            selected={this.props.animalsStore.selected}
            to={this.props.to}
          />
        )}
      </>
    );
  }
}
