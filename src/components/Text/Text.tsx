import React, { FC } from "react";
import { TextProps } from "./Text.types";
import styled from "styled-components";

const Text: FC<TextProps> = (props) => {
  let StyledSpan = styled.span`
    color: ${props.disabled ? "#222222" : props.color || "#000000"};
    background: ${props.disabled ? "#aaaaaa" : props.background || "#ffffff"};
    cursor: ${props.disabled ? "not-allowed" : ""};
  `;

  return <StyledSpan data-testid="Text">{props.text || "Text"}</StyledSpan>;
};

export default Text;
