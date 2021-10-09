import rocketsActionTypes from './rockets-types';

export const setRockets = (payload) => ({
  type: rocketsActionTypes.SET_ROCKETS,
  payload,
});

export const reserveRocket = (payload) => ({
  type: rocketsActionTypes.RESERVE_ROCKET,
  payload,
});
