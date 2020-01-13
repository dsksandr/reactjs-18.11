import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import chatsReducer from 'reducers/chats'

const initReducer = history =>
  combineReducers({
    router: connectRouter(history),
    chats: chatsReducer
  })

export default initReducer
