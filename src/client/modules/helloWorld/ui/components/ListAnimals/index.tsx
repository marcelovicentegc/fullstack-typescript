import { inject, observer } from "mobx-react";
import * as React from "react";
import { Query } from "react-apollo";
import { AnimalsStore } from "../../../../../stores";
import { Loading } from "../Loading";
import { NoData } from "../NoData";
import { Animal } from "../Animal";
import * as style from "./main.scss";
import { GetAnimalsQuery, GetAnimalsDocument } from "../../../../../gql";

interface Props {
  to: string;
  animalsStore?: AnimalsStore;
}

@inject("animalsStore")
@observer
export class ListAnimals extends React.Component<Props> {
  private handleMutation = () => {
    this.props.animalsStore.handleMutation();
  };

  public render() {
    return (
      <>
        {!this.props.animalsStore.mutation ? (
          <>
            <p>Select the animal you wish to {this.props.to}:</p>
            <Query<GetAnimalsQuery> query={GetAnimalsDocument}>
              {({ data, loading }) => {
                if (loading) return <Loading />;
                if (!data || data.animals.length === 0) return <NoData />;
                return this.props.animalsStore.displayList ? (
                  <>
                    {data.animals.map((animal, i) => (
                      <div
                        key={i}
                        id={animal.id}
                        className={style.animal}
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
