import React from "react";
// import { Button } from "./components/Button";
import styled from "styled-components";

const Button = styled.button`
background:blue,
border-radius:3px,
border:  1px solid red,
padding: 20px`;

function App() {
  return (
    <div>
      Render components to test here!!
      <Button />
    </div>
  );
}

export default App;
