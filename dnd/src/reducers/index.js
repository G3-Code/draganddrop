import React from "react";
import * as actionTypes from "../actions";

const initialState = {
  name: "Gayathri",
  error: "",
  counterVal: 0
};

export default function nameReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER_SUCCESS: {
      return {
        ...state,
        counterVal: action.payload
      };
    }

    case actionTypes.INCREASE_COUNTER_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
