import rocketsActionTypes from "./rockets-types"

export const setRockets = (payload) => ({
  type: rocketsActionTypes.SET_ROCKETS,
  payload
});