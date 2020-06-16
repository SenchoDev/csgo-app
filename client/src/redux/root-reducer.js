import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directory/directory.reducer'
import userReducer from './user/user.reducer';

const persistConfig ={
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
  directory: directoryReducer,
  user: userReducer
})

export default persistReducer(persistConfig, rootReducer)