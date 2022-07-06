import React, { useState } from "react";
import styled from "styled-components";

import theme from "../theme";

export default function Input({ id, label, name, pattern, type }) {
  let [value, setValue] = useState("");
  return (
    <Root>
      <input
        type={type}
        name={name}
        id={id}
        onChange={(e) => setValue(e.target.value)}
        className={`${value === "" ? "" : "active"}`}
        pattern={pattern}
      />
      <label for={id}>{label}</label>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 4.7rem;
  margin-bottom: 1rem;

  label {
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    left: 0;
    font-family: "Montserrat";
    font-weight: 100;
    font-size: 1rem;
    letter-spacing: 1.5px;
    transition: ${theme.transition};
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${theme.color.granite};
    background-color: transparent;
    font-family: "Breadley Sans";
    font-size: 1.8rem;
    letter-spacing: 2.5px;
    margin-bottom: 0.3rem;
    &:-webkit-autofill {
      appearance: none;
      box-shadow: 0 0 0 30px transparent inset !important;
      -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    }
  }
  input:focus {
    border-bottom: 3px solid ${theme.color.granite};
    transition: ${theme.transition};
    outline: 0;
  }
  input:focus + label,
  input.active + label {
    top: 0;
    font-size: 0.8rem;
  }
`;

//
// input:focus + label,
// input.active + label {
//   top: 0;
//   transform: translateY(0);
//   font-size: 0.9rem;
//   line-height: 2;
//   letter-spacing: 3px;

// .form {
//   &.input {
//     font-family: ${theme.font.family};
//     font-style: normal;
//     font-weight: 300;
//     text-transform: uppercase;
//     ${vw('font-size', 14, 18)}
//     ${vw('line-height', 16, 21)}
//     ${vw('letter-spacing', 1, 2)}
//   }
//   &.content {
//     font-family: ${theme.font.header};
//     font-style: normal;
//     font-weight: 300;
//     ${vw('font-size', 21, 36)}
//     ${vw('line-height', 27, 46)}
//     ${vw('letter-spacing', 0.3)}
//   }
//   &.disclaimer {
//     font-family: ${theme.font.family};
//     font-style: normal;
//     font-weight: 300;
//     letter-spacing: normal;
//     ${vw('font-size', 11, 12)}
//     ${vw('line-height', 14, 16)}
//   }
// }
