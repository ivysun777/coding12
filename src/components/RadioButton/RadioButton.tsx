import React, { FC } from "react";
import { RadioButtonProps } from "./RadioButton.types";
import { Label } from "../Label";
import styled from "styled-components";

const RadioButton: FC<RadioButtonProps> = (props) => {
  let StyledSpan = styled.span`
    background: ${props.disabled ? "#aaaaaa" : props.background || "#ffffff"};
    cursor: ${props.disabled ? "not-allowed" : ""};
  `;
  const id = `radio_${props.text}`;
  return (
    <StyledSpan data-testid="RadioButton">
      <input type="radio" id={id} disabled={props.disabled} />
      <Label
        text={props.text}
        for={id}
        disabled={props.disabled}
        background={props.background}
      />
    </StyledSpan>
  );
};

export default RadioButton;
