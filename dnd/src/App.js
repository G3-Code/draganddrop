import React from "react";
// import { Button } from "./components/Button";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => (props.primary ? "red" : "green")};
  border-radius: 3px;
  border: 1px solid red;
  padding: 7px 10px;
  color: #fff;
  &:hover {
    color: blue;
  }
`;

function App() {
  return (
    <div>
      Render components to test here!!
      <div>
        <button>Create</button>
        <Button>Create </Button>
      </div>
    </div>
  );
}

export default App;
