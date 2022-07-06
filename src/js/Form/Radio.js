import React from "react";
import styled from "styled-components";

import theme from "../theme";

function Radio({ label, name, options }) {
  return (
    <Root>
      <Label>{label}</Label>
      <Options>
        {options.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              name={name}
              id={item.value}
              value={item.value}
            />
            <span className="select"></span>
            <label for={item.value}>{item.label}</label>
          </div>
        ))}
      </Options>
    </Root>
  );
}

const Label = styled.p`
  display: inline-block;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-weight: 100;
  font-size: 1rem;
  letter-spacing: 1.5px;
  margin: 0 0 2rem 0;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    div:first-of-type {
      width: 60%;
    }
  }
  border-bottom: 1px solid ${theme.color.granite};
  div {
    display: flex;
    align-items: center;

    margin-bottom: 1.7rem;
    label {
      background-color: transparent;
      font-family: "Breadley Sans";
      font-size: 1.8rem;
      letter-spacing: 2.5px;
      font-weight: 200;
      text-transform: capitalize;
      white-space: nowrap;
    }
    input {
      appearance: none;
      -webkit-appearance: none;
      margin: 0 2rem 0 0;
      border-radius: 50%;
      height: 1.8rem;
      width: 1.8rem;
      outline: 0.5px solid ${theme.color.granite};
    }
    input:checked {
      border: 0.5rem solid ${theme.color.yellow};
      background-color: ${theme.color.granite};
    }
  }
`;

const Root = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;
`;

export default Radio;
