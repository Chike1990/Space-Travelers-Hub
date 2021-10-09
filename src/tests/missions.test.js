import {
  setMissions,
  joinMission
} from '../redux/missions/missions-actions';
import missionsReducer from "../redux/missions/missions-reducer"

describe('Unit tests for missions', () => {
  jest.mock('../redux/missions/missions-actions');

  const SET_MISSIONS = 'SET_MISSION';
  const JOIN_MISSION = 'JOIN_MISSION';

  const actionSetMock = {
    type: SET_MISSIONS,
    state: [
      {
        mission_id: 'mission1',
        mission_name: 'name',
        description: 'mission1 description',
        reserved: false
      },
    ],
  };
  describe('reducers', () => {
    it('returns the correct state for SET_MISSIONS action', () => {
      expect(missionsReducer([], { type: SET_MISSIONS, payload: actionSetMock })).toEqual(actionSetMock);
    });
    it('returns the correct state for JOIN MISSION action', () => {
      const expectedOutputState = [
        {
          mission_id: 'mission1',
          mission_name: 'name',
          description: 'mission1 description',
          reserved: true || false,
        },
      ];
      expect(missionsReducer(actionSetMock.state, { type: JOIN_MISSION, payload: 'mission1' })).toEqual(
        expectedOutputState,
      );
    });
  });
});
