import missionsActionTypes from './missions-types';

export const setMissions = (payload) => ({
  type: missionsActionTypes.SET_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: missionsActionTypes.JOIN_MISSION,
  payload,
});
