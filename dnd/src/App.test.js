import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./components/Home";

configure({ adapter: new Adapter() });

describe("Testing href", () => {
  it("Testing href", () => {
    const wrapper = mount(<App />);
    const button = wrapper.find("button");
    console.log(button);
    window.location.assign = jest.fn();
    button.simulate("click");
    expect(window.location.assign).toHaveBeenCalledWith("/page1");
    expect(button).toBeTruthy();
  });
});
