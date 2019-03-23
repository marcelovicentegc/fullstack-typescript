import { shallow } from "enzyme";
import * as React from "react";
import NoData from "../modules/hello_world/ui/misc/NoData";

describe("NoData test suite", () => {
  it("Should render without throwing an error", () => {
    expect(
      shallow(<NoData />).contains(
        <div className="process">
          <div className="process-status">No data 😮!</div>
        </div>
      )
    ).toEqual(true);
  });
});
