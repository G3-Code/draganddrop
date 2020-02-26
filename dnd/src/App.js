import React from "react";
// import { Button } from "./components/Button";
import styled, { ThemeProvider, css } from "styled-components";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

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
  let role = "admin";
  const handleSubmit = e => {
    switch (role) {
      case "admin":
        //window.location.href = "/Page1";
        window.location.assign("/page1");
        break;
      default:
        //window.location.href = "/Page2";
        window.location.assign("/page2");
        break;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <H1>Render components to test here!!</H1>
        <div>
          <button>Create</button>
          <Button color="alert">Create </Button>
        </div>
      </div>
      <Home handleSubmit={handleSubmit} role={role} />
      <Router>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
