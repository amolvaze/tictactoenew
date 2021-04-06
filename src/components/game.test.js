import React from "react";
import Game from "./game";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

const findButtonByText = (wrapper, text) => {
  return wrapper.findWhere(
    (component) => component.name() === "button" && component.text() === text
  );
};

it("renders without crashing", () => {
  shallow(<Game />);
});

it("should not make a move if the square is not empty", () => {
  const wrapper = mount(
    <Game squares={["X", null, "O", null, null, null, null, null, null]} />
  );
  const buttonX = findButtonByText(wrapper, "X");
  buttonX.simulate("click");

  // Get non-empty square
  const nonEmptySquare = wrapper.find("Square").at(2);

  // Click it
  nonEmptySquare.simulate("click");

  // Check that text content stays the same
  expect(nonEmptySquare.text()).toBe("O");
});
