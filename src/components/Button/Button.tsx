import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import styled from "styled-components";

const Button: FC<ButtonProps> = (props) => {
  let Wrapper = styled.section`
    color: ${props.disabled ? "#222" : "#fff"};
    background: ${props.disabled ? "#aaa" : props.background || "#3A56C5"};
    cursor: ${props.disabled ? "not-allowed" : "pointer"};
    padding: 8px 16px;
    width: fit-content;
  `;

  return <Wrapper data-testid="Button">{props.text || "Button"}</Wrapper>;
};

export default Button;
