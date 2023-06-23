import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("<Button />", () => {
  it("should be visible", () => {
    render(<Button />);

    const button = screen.getByTestId("Button");

    expect(button).toBeVisible();
  });

  it("should change background color on disabled state", () => {
    render(<Button disabled={true} />);

    const button = screen.getByTestId("Button");

    expect(button).toHaveStyle("background-color:ButtonFace");
  });
});
