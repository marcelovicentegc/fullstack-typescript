import { shallow } from "enzyme";
import * as React from "react";
import { Query } from "react-apollo";
import { Animal } from "../modules/hello_world/ui/crud/Animal";

describe("Animal suite", () => {
  const wrapper = shallow(<Animal to="delete" selected="1" />);
  it("Renders <Query></Query> components", () => {
    expect(wrapper.find(Query)).toHaveLength(1);
  });
});
