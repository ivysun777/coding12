import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RadioButton from "./RadioButton";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("<RadioButton />", () => {
  test("should be visible", () => {
    render(<RadioButton text="Option 1" />);

    const radioButton = screen.getByTestId("RadioButton");

    expect(radioButton).toBeVisible();
  });

  test("should change background color on disabled state", () => {
    const tree = renderer
      .create(<RadioButton text="Option 1" disabled={true} />)
      .toJSON();

    expect(tree).toHaveStyleRule("background", "#aaaaaa");
  });
});
