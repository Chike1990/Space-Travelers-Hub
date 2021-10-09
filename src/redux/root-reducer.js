import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rocketsReducer from './rockets/rockets-reducer';
import missionsReducer from './missions/missions-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['rockets', 'missions'],
};

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

export default persistReducer(persistConfig, rootReducer);
