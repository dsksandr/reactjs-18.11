import { createAction } from 'redux-actions';
import io from 'socket.io-client';
import { func } from 'prop-types';

const socket = io('http://localhost:3000'); 

export const load = createAction('[Chats] Load');
export const send = createAction('[Chats] Send');
export const add = createAction('[Chats] Add');
export const remove = createAction('[Chats] Remove');

export function listen() {
  return function(dispatch) {
    fetch('http://localhost:3000/chats ')
      .then((response) => response.json())
      .then(( chats) => {
        dispatch(load(chats))
      });
    socket.on('new chat', (chat) => {
      dispatch(add(chat));
    });
    socket.on('chat message', (message) => {
      dispatch(send(message));
    });
  } 
}

export function removeChat(chatId){
  return function(dispatch) {
    fetch(`http://localhost:3000/chats/${chatId}`, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch(remove(chatId));
      });
  }
}

export function createChat(chat) {
  socket.emit('new chat', chat);
}

export function sendMessage(message) {
  socket.emit('chat message', message);
}