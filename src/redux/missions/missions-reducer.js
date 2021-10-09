import missionsActionTypes from "./missions-types";

const INITIAL_STATE = []

const missionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case missionsActionTypes.SET_MISSIONS:
      return state.length ? state : action.payload
    case missionsActionTypes.JOIN_MISSION:
      return state.map(mission => mission.mission_id === action.payload ? {...mission, reserved: !mission.reserved}: {...mission})
    default:
      return state;
  }
}

export default missionsReducer;