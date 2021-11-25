import rocketsActionTypes from './rockets-types';

const INITIAL_STATE = [];

const rocketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case rocketsActionTypes.SET_ROCKETS:
      return state.length ? state : action.payload;
    case rocketsActionTypes.RESERVE_ROCKET:
      return state.map((rocket) => (rocket.id === action.payload
        ? { ...rocket, reserved: !rocket.reserved } : { ...rocket }));
    default:
      return state;
  }
};

export default rocketsReducer;
