import React from "react";
// import { Button } from "./components/Button";
import styled, { ThemeProvider, css } from "styled-components";

const theme = {
  primary: "red",
  secondary: "blue",
  alert: "orange",
  font: "sans-serif"
};
const Button = styled.button`
  background: ${props => (props.primary ? "red" : "green")};
  border-radius: 3px;
  border: 1px solid red;
  padding: 7px 10px;
  color: #fff;
  ${props =>
    props.color &&
    css`
      background: ${props => props.theme[props.color]};
    `}
  &:hover {
    color: blue;
  }
`;

const H1 = styled.h1`
  font-family: ${props => props.theme.font};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <H1>Render components to test here!!</H1>
        <div>
          <button>Create</button>
          <Button color="alert">Create </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
