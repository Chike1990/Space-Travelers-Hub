import rocketsActionTypes from "./rockets-types";
const INITIAL_STATE = []

const rocketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case rocketsActionTypes.SET_ROCKETS:
      return action.payload
    default:
      return state
  }
}

export default rocketsReducer;