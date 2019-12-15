import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send } from 'actions/chats';

const initialState = new Map({
    loading: false,
    entries: new Map(),
});

export const chatsReducer = handleActions({
    [load]: (state, action) => {
        return state.set('entries', fromJS({
      '1': {id: '1', messages: [], name: 'Astik'},
      '2': {id: '2', messages: [], name: 'Eric Hoffman'},
      '3': {id: '3', messages: [], name: 'Boris Moskalev'}
    }));
    },
    [send]: (state, action) => {
        const { chatId, ...message } = action.payload;

        console.log(state.mergeIn(['entries', chatId, 'messages'], message).toJS());

        return state.mergeIn(['entries', chatId, 'messages'], message);
    }
}, initialState);