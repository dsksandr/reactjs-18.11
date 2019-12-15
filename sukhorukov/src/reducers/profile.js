import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, addUSer } from 'actions/profile';

const initialState = new Map({
  entries: new Map(),
});

export const ProfileReducer = handleActions({
  [load]: (state, action) => {
    return state.set('entries', fromJS({
      name: 'Sergey',
      surname: 'Sukhorukov',
      email: 'sergey@mail.ru',
    }))
  },
  [addUSer]: (state, action) => {
    const { _id } = action.payload;

    return state.setIn(['entries', _id], fromJS({...action.payload}))
  },
}, initialState);