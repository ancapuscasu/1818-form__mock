import React from "react";
import styled from "styled-components";
import theme from "../theme";

import arrowDown from "../../media/arrow-down.svg";

function Select({ id, label, name, options }) {
  return (
    <Root>
      <Label for={id}>{label}</Label>
      <SelectBox>
        <select id={id} name={name}>
          <option>Select an option</option>
          {options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <img src={arrowDown} alt="Arrow pointing down" />
      </SelectBox>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;
`;

const Label = styled.label`
  display: inline-block;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-weight: 100;
  font-size: 1rem;
  letter-spacing: 1.5px;
  margin: 0 0 2rem 0;
`;

const SelectBox = styled.div`
  width: 100%;
  position: relative;
  select {
    width: 100%;
    appearance: none;
    border: 1px solid ${theme.color.granite};
    font-family: "Breadley Sans";
    font-size: 1.8rem;
    letter-spacing: 2.5px;
    padding: 1rem;
    transition: ${theme.transition};
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  img {
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    right: 5%;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

export default Select;
