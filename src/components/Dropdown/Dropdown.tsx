import React, { FC } from "react";
import { DropdownProps } from "./Dropdown.types";
import styled from "styled-components";

const Dropdown: FC<DropdownProps> = (props) => {
  let StyledSelect = styled.select`
    background: ${props.disabled ? "#aaaaaa" : props.background || "#ffffff"};
    cursor: ${props.disabled ? "not-allowed" : ""};
  `;

  return (
    <StyledSelect data-testid="Dropdown" disabled={props.disabled}>
      {props.options?.map((option) => (
        <option>{option}</option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
