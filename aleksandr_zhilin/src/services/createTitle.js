export const createTitle = ({ chatName }) => {

  const regExpChat = /\/chat\/(.|\n)*/;
  const regExpAbout = /\/about\/(.|\n)*/;
  const pathname = document.location.pathname;

  if (regExpChat.test(pathname) && chatName) {
    document.title = `${chatName} | MyChat`;
  } else if (regExpAbout.test(pathname)) {
    document.title = 'About | MyChat';
  } else if (pathname === '/') {
    document.title = 'MyChat';
  } else {
    document.title = 'MyChat';
  }
};