import React from "react";
import App from "./App";
import { mount, shallow } from "enzyme";
import { createStore } from "redux";
import reducer from "./reducers";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const setUp = (initialState = {}) => {
  //const store = storeFactory(initialState);
  const mockStore = configureMockStore();
  const store = mockStore({
    name: "Gayathri",
    error: "",
    counterVal: 0
  });
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  console.log(wrapper.debug());
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// const storeFactory = initialState => {
//   return createStore(reducer, initialState);
// };

describe("Testing href", () => {
  it("Testing href", () => {
    setUp();
    // const wrapper = setUp();
    // const appComponent = findByTestAttr(wrapper, "App");
    // expect(appComponent.length).toBe(1);
  });
});
