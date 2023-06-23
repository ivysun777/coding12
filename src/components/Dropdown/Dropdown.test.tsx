import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dropdown from "./Dropdown";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("<Dropdown />", () => {
  test("should be visible", () => {
    render(<Dropdown />);

    const dropdown = screen.getByTestId("Dropdown");

    expect(dropdown).toBeVisible();
  });

  test("should change background color on disabled state", () => {
    const tree = renderer.create(<Dropdown disabled={true} />).toJSON();

    expect(tree).toHaveStyleRule("background", "#aaaaaa");
  });
});
