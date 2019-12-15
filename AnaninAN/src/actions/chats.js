import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io('http://localhost:8888');

export const load = createAction('[Chats] Load');
export const send = createAction('[Chats] Send');
export const add = createAction('[Chats] Add');
export const remove = createAction('[Chats] Remove');

export const listen = () => (dispatch) => {
  fetch('http://localhost:8888/chats')
    .then((response) => response.json())
    .then((chats) => {
      dispatch(load(chats));
    });

  socket.on('new chat', (chat) => {
    dispatch(add(chat));
  });

  socket.on('chat message', (message) => {
    dispatch(send(message));
  });
}

export const removeChat = (chatId) => (dispatch) => {
  fetch(`http://localhost:8888/chats/${chatId}`, {
    method: 'DELETE',
  })
    .then(() => {
      dispatch(remove(chatId));
    });
}

export const createChat = chat => {
  socket.emit('new chat', chat);
}

export const sendMessage = message => {
  socket.emit('chat message', message);
}