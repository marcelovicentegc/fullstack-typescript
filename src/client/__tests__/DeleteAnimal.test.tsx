import { shallow } from "enzyme";
import * as React from "react";
import { Mutation } from "react-apollo";
import DeleteAnimal from "../modules/hello_world/ui/crud/DeleteAnimal";

describe("DeleteAnimal suite", () => {
  const wrapper = shallow(
    <DeleteAnimal
      animal={{
        id: "1",
        species: "Magic mushroom",
        favoriteFood: "Dead plants"
      }}
    />
  );
  it("Renders <Mutation></Mutation> components", () => {
    expect(wrapper.find(Mutation)).toHaveLength(1);
  });
});
