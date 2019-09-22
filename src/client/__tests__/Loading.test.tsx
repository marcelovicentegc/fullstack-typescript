import { shallow } from "enzyme";
import * as React from "react";
import { Loading } from "../modules/hello_world/ui/misc/Loading";

describe("Loading test suite", () => {
  it("Should render without throwing an error", () => {
    expect(
      shallow(<Loading />).contains(
        <div className="loading-wrapper">
          <div className="admin-no-data">Loading 🤔...</div>
        </div>
      )
    ).toEqual(true);
  });
});
