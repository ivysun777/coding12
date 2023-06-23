import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("<Button />", () => {
  test("should be visible", () => {
    render(<Button />);

    const button = screen.getByTestId("Button");

    expect(button).toBeVisible();
  });

  test("should change background color on disabled state", () => {
    const tree = renderer.create(<Button disabled={true} />).toJSON();

    expect(tree).toHaveStyleRule("background", "#aaaaaa");
  });
});
