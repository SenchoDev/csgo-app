import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directory/directory.reducer'
import userReducer from './user/user.reducer';
import teamsReducer from './teams/teams.reducer'

const persistConfig ={
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
  directory: directoryReducer,
  user: userReducer,
  teamsData: teamsReducer,
})

export default persistReducer(persistConfig, rootReducer)