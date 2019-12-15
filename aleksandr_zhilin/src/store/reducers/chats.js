import { handleActions } from 'redux-actions';
import { Map, fromJS }   from 'immutable';

import { load, send, add } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map,
});

export const chatsReducer = handleActions({
  [load]: (state, actions) => {
    return state.set('entries', fromJS({
      '1': {
        id: 1,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Bot'
          }
        ],
        name: 'Роман',
        read: false,
      },
      '2': {
        id: 2,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Bot'
          }
        ],
        name: 'Мама',
        read: false,
      },
      '3': {
        id: 3,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Bot'
          }
        ],
        name: 'React_18.11',
        read: true,
      },
      '4': {
        id: 4,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Bot'
          }
        ],
        name: 'Брат',
        read: true,
      },
    }));
  },
  [send]: (state, actions) => {
    const { ...message } = actions.payload;
    return state.mergeIn(['entries', message.id, 'messages'], {
      author: message.author,
      text: message.text
    });
  },
  [add]: (state, action) => {
    const { name, id } = action.payload;

    return state.setIn(['entries', id], fromJS({
      id: id,
      messages: [],
      name,
    }))
  }
}, initialState);
