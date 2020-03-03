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
      <div>
        <div>Opacity Beginning</div>
        <button className="opacity">Demo Buttons</button>
        <div>Opacity Ending</div>
      </div>
      <div>
        <div>Display None Beginning</div>
        <button className="displayNone">Demo Buttons</button>
        <div>Display None Ending</div>
      </div>
      <div>
        <div>Visibility Hidden Beginning</div>
        <button className="visibility-hidden">Demo Buttons</button>
        <div>Visibility Hidden Ending</div>
      </div>
    </Fragment>
  );
}
/**
 * document.body.addEventListener('focusin', (event) => {
 *  console.log(document.activeElement);
 * })
 */
