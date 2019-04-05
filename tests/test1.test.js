import React from "react";
import renderer from "react-test-renderer";
import Slider from "../src/Slider";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<Slider />).toJSON();
  expect(tree).toMatchSnapshot();
});
