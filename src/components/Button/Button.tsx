import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import styled from "styled-components";

const Button: FC<ButtonProps> = (props) => {
  let StyledButton = styled.button`
    color: ${props.disabled ? "#222222" : "#ffffff"};
    background: ${props.disabled ? "#aaaaaa" : props.background || "#3A56C5"};
    cursor: ${props.disabled ? "not-allowed" : "pointer"};
    padding: 8px 16px;
  `;

  return (
    <StyledButton data-testid="Button" disabled={props.disabled}>
      {props.text || "Button"}
    </StyledButton>
  );
};

export default Button;
