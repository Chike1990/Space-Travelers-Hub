import missionsActionTypes from "./missions-types";

const INITIAL_STATE = []

const missionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case missionsActionTypes.SET_MISSIONS:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default missionsReducer;