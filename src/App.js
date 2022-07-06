import styled from "styled-components";
import "./css/App.css";

import RegisterForm from "./js/Form/RegisterForm";

function App() {
  return (
    <Root>
      <RegisterForm />
    </Root>
  );
}

const Root = styled.div``;

export default App;
