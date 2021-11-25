import rocketsReducer from '../redux/rockets/rockets-reducer';

describe('Unit tests for redux/rockets', () => {
  jest.mock('../redux/rockets/rockets-actions');

  const SET_ROCKETS = 'SET_ROCKETS';
  const RESERVE_ROCKET = 'RESERVE_ROCKET';

  const actionSetMock = {
    type: SET_ROCKETS,
    state: [{
      id: 'rocket1',
      name: 'Rocket 1',
      reserved: false,
    }],
  };
  describe('reducers', () => {
    it('returns the correct state for SET_ROCKETS action', () => {
      expect(rocketsReducer([], {
        type: SET_ROCKETS, payload: actionSetMock,
      })).toEqual(actionSetMock);
    });
    it('returns the correct state for RESERVE_ROCKET action', () => {
      const expectedOutputState = [{
        id: 'rocket1',
        name: 'Rocket 1',
        reserved: true || false,
      }];
      expect(rocketsReducer(actionSetMock.state, { type: RESERVE_ROCKET, payload: 'rocket1' })).toEqual(expectedOutputState);
    });
  });
});
