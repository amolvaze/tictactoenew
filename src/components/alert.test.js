import React from "react";
import Alert from "./alert";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Alert />);
});
