import React from "react";

export default function Home(props) {
  return (
    <div>
      <button onClick={props.handleSubmit}>Login</button>
    </div>
  );
}
