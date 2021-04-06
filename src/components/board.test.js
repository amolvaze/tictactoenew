import React from "react";
import Board from "./board";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import Game from "./game";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Board />);
});

it("should render board with correct number of squares", () => {
  // Render the game component
  const wrapper = mount(<Game />);

  // Find the 'X' button
  const buttonX = wrapper.findWhere(
    (component) => component.name() === "button" && component.text() === "X"
  );

  // Press it
  buttonX.simulate("click");

  // Check that board is rendered
  expect(wrapper.find("Square").length).toBe(9);
});
