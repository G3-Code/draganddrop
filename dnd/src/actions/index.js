import React from "react";

export const INCREASE_COUNTER_SUCCESS = "INCREASE_COUNTER_SUCCESS";
export const INCREASE_COUNTER_ERROR = "INCREASE_COUNTER_ERROR";

export const getIncreasedCounter = count => {
  return dispatch => {
    try {
      dispatch({
        type: INCREASE_COUNTER_SUCCESS,
        payload: count + 1
      });
    } catch (error) {
      dispatch({
        type: INCREASE_COUNTER_ERROR,
        payload: error
      });
    }
  };
};
