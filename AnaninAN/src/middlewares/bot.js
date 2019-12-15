import { send } from 'actions/chats';

export const bot = store => next => action => { //та же запись, что и в logger.js
  if (action.type === send.toString()) {
    const { chatId, author } = action.payload;

    if (author!== 'Bot') {
      setTimeout(() => {
        store.dispatch(send({ chatId, author: 'Bot', text: `Hello, ${author}!!!` }));
      }, 1000);
    }
  }

  return next(action);
}