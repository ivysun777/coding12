import React, { FC } from "react";
import { LabelProps } from "./Label.types";
import styled from "styled-components";

const Label: FC<LabelProps> = (props) => {
  let StyledLabel = styled.label`
    background: ${props.disabled ? "#aaaaaa" : props.background || "#ffffff"};
    cursor: ${props.disabled ? "not-allowed" : ""};
  `;

  return <StyledLabel data-testid="Label">{props.text || "Label"}</StyledLabel>;
};

export default Label;
