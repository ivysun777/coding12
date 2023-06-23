import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Label from "./Label";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("<Label />", () => {
  test("should be visible", () => {
    render(<Label />);

    const label = screen.getByTestId("Label");

    expect(label).toBeVisible();
  });

  test("should change background color on disabled state", () => {
    const tree = renderer.create(<Label disabled={true} />).toJSON();

    expect(tree).toHaveStyleRule("background", "#aaaaaa");
  });
});
