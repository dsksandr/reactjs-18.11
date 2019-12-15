import { send } from 'actions/chats';

export function bot(store){
  return function(next) {
    return function(action) {
      if(action.type === send.toString()) {
        const { chatId, author } = action.payload;

        if (author != 'Bot') {
          setTimeout(() => {
            store.dispatch(send({chatId, author: 'Bot', text: `Hello, ${author}! Bot is online!`}))
          }, 1000)
        }
      }
      return next(action);
    }
  }
}