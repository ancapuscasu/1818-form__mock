import React from "react";
import styled from "styled-components";

import theme from "../theme";

function Checkbox() {
  return (
    <Root>
      <input type="checkbox" name="consent" id="consent" />
      <label for="consent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        varius, lectus a tincidunt suscipit, quam tellus fringilla justo, eget
        tempus leo massa eleifend metus. Vestibulum ac ante nisi. Duis eu
        elementum purus. Cras a interdum nulla. In hac habitasse platea
        dictumst. Vivamus quis justo erat. Cras non erat at nisi imperdiet
        elementum interdum sed turpis. Vivamus rutrum sed sapien tincidunt
        faucibus. Curabitur pharetra purus varius ornare faucibus. Nunc vel
        egestas libero, non sodales dolor.{" "}
      </label>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  margin-bottom: 3.5rem;
  padding-left: 4rem;

  input {
    display: none;
  }
  input + label:before {
    box-sizing: border-box;
    content: "";
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    border: 1px solid ${theme.color.granite};
    position: absolute;
    left: 0;
    top: 0;
    background: transparent;
  }

  input:checked + label:before {
    box-sizing: border-box;
    border: 0.5rem solid ${theme.color.yellow};
    background: ${theme.color.granite};
    box-shadow: 0 0 0 1px ${theme.color.granite};
  }

  label {
    font-family: "Montserrat";
    font-weight: 200;
    font-size: 0.75rem;
    line-height: 1.3;
  }
`;

export default Checkbox;
