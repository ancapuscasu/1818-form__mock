import React from "react";
import styled from "styled-components";
import theme from "../theme";
import Checkbox from "./Checkbox";

import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";

export default function RegisterForm() {
  const bedOptions = [
    {
      value: "2 Beds",
      label: "2 Bedrooms",
    },
    {
      value: "3 Beds",
      label: "3 Bedrooms",
    },
  ];

  const realtorOptions = [
    {
      value: "yes",
      label: "yes",
    },
    {
      value: "no",
      label: "no",
    },
  ];

  const howHeardOptions = [
    {
      value: "realtor",
      label: "Realtor",
    },
    {
      value: "radio",
      label: "Radio",
    },
    {
      value: "word of mouth",
      label: "Word of mouth",
    },
  ];
  return (
    <Root>
      <form>
        <Input
          name="fname"
          type="text"
          id="fname"
          label="First Name*"
          pattern="[a-zA-Z]+"
        />
        <Input
          name="lname"
          type="text"
          id="lname"
          label="Last Name*"
          pattern="[a-zA-Z]+"
        />
        <Input name="email" type="email" id="email" label="Email Address*" />
        <Input
          name="tel"
          type="tel"
          id="tel"
          label="Phone Number*"
          pattern="^(?d{3})?[s.-]?d{3}[s.-]?d{4}$"
        />
        <Input name="postal" type="text" id="postal" label="Postal Code*" />
        <Radio
          label="Bedroom Type Interested"
          name="beds"
          options={bedOptions}
        />
        <Radio
          label="Are you a realtor?*"
          name="isRealtor"
          options={realtorOptions}
        />
        <Select
          id="howHeard"
          name="howHeard"
          label="How did you hear about us?*"
          options={howHeardOptions}
        />
        <Checkbox />
        <p className="extra">
          Cras a interdum nulla. In hac habitasse platea dictumst. Vivamus quis
          justo erat. Cras non erat at nisi imperdiet elementum interdum sed
          turpis. Vivamus rutrum sed sapien tincidunt faucibus. Curabitur
          pharetra purus varius ornare faucibus. Nunc vel egestas libero{" "}
          <a href="" className="link">
            click here
          </a>
          .
        </p>
        <Container>
          <button type="submit">Submit</button>
        </Container>
      </form>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1.5rem;
  margin-bottom: 5rem;
  @media (min-width: 576px) {
    padding: 0 8vw;
  }
  form {
    @media (min-width: 992px) {
      width: 30rem;
    }
  }
  p.extra {
    font-family: "Montserrat";
    font-weight: 200;
    font-size: 0.75rem;
    margin-bottom: 5rem;
    a {
      color: inherit;
    }
  }

  button {
    background-color: ${theme.color.yellow};
    padding: 3vw 26vw;
    text-transform: uppercase;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 1.2rem;
    border: none;
    transition: ${theme.transition};
    @media (min-width: 576px) {
      padding: 1.5vw 3vw;
    }
    @media (min-width: 992px) {
      padding: 0.8vw 1.5vw;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
