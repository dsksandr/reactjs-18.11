import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import { chatsReducer } from './chats';
import { ProfileReducer } from './profile';

export const initReducer = history => combineReducers({
  router: connectRouter(history),
  chats: chatsReducer,
  profile: ProfileReducer,
});