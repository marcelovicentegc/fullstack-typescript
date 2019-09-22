import { shallow } from "enzyme";
import * as React from "react";
import { Query } from "react-apollo";
import { getAnimals } from "../../server/schema/graphql/Queries.graphql";
import { Animal } from "../modules/hello_world/ui/crud/Animal";
import { ListAnimals } from "../modules/hello_world/ui/crud/ListAnimals";
import { Loading } from "../modules/hello_world/ui/misc/Loading";
import { NoData } from "../modules/hello_world/ui/misc/NoData";
import { AnimalsStore } from "../stores";
import { GetAnimalsQuery } from "../__types__/typeDefs";
import { rootStore } from "../stores/RootStore";

describe("ListAnimals suite", () => {
  const props = {
    to: "update",
    animalsStore: new AnimalsStore(rootStore)
  };

  it("Should render without throwing an error", () => {
    expect(
      shallow(<ListAnimals {...props} />).contains(
        <>
          {!props.animalsStore.mutation ? (
            <>
              <p>Select the animal you wish to {props.to}:</p>
              <Query<GetAnimalsQuery> query={getAnimals}>
                {({ data, loading }) => {
                  if (loading) return <Loading />;
                  if (!data || data.animals.length === 0) return <NoData />;
                  return props.animalsStore.displayList ? (
                    <>
                      {data.animals.map((animal, i) => (
                        <div
                          key={i}
                          id={animal.id}
                          className="animal"
                          onClick={() => {
                            props.animalsStore.selected = animal.id;
                            props.animalsStore.handleMutation();
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
          ) : props.to === "update" ? (
            <Animal selected={props.animalsStore.selected} to={props.to} />
          ) : (
            <Animal selected={props.animalsStore.selected} to={props.to} />
          )}
        </>
      )
    );
  });
});
