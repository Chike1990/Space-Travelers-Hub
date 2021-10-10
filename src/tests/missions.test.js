import missionsReducer from '../redux/missions/missions-reducer';

describe('Unit tests for missions', () => {
  jest.mock('../redux/missions/missions-actions');

  const SET_MISSIONS = 'SET_MISSIONS';
  const JOIN_MISSION = 'JOIN_MISSION';

  const actionSetMock = {
    type: SET_MISSIONS,
    state: [
      {
        missionId: 'mission1',
        mission_name: 'name',
        description: 'mission1 description',
        reserved: false,
      },
    ],
  };
  describe('reducers', () => {
    it('returns the correct state for SET_MISSIONS action', () => {
      expect(missionsReducer([], {
        type: SET_MISSIONS, payload: actionSetMock.state,
      })).toEqual(actionSetMock.state);
    });
    it('returns the correct state for JOIN MISSION action', () => {
      const expectedOutputState = [
        {
          missionId: 'mission1',
          mission_name: 'name',
          description: 'mission1 description',
          reserved: true,
        },
      ];
      expect(missionsReducer(actionSetMock.state, { type: JOIN_MISSION, payload: 'mission1' })).toEqual(
        expectedOutputState,
      );
    });
  });
});