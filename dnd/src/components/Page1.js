import React, { Fragment } from "react";
import "../App.css";

export default function Page1() {
  return (
    <Fragment>
      <div>
        <div>Visually Hidden Beginning</div>
        <button className="visually-hidden">Demo Buttons</button>
        <div>Visually Hidden Ending</div>
      </div>
    </Fragment>
  );
}
