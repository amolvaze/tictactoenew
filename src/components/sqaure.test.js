import React from "react";
// import Square from "./square";
import { mount } from "enzyme";
import Game from "./game";

// it("renders without crashing", () => {
//   shallow(<Square />);
// });

it("should register and display result of human player's move", () => {
  // Render the game component
  const wrapper = mount(<Game />);
  const buttonX = wrapper.findWhere(
    (component) => component.name() === "button" && component.text() === "X"
  );
  buttonX.simulate("click");

  const firstSquare = wrapper.find("Square").at(0);

  // Click the first square
  firstSquare.simulate("click");

  // Validate that it has 'X' rendered
  expect(firstSquare.text()).toBe("X");
});
