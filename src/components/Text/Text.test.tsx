import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Text from "./Text";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("<Text />", () => {
  test("should be visible", () => {
    render(<Text />);

    const text = screen.getByTestId("Text");

    expect(text).toBeVisible();
  });

  test("should change background color on disabled state", () => {
    const tree = renderer.create(<Text disabled={true} />).toJSON();

    expect(tree).toHaveStyleRule("background", "#aaaaaa");
  });
});
