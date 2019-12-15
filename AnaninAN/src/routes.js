import { ChatPage } from 'pages/ChatPage';
import { AboutPage } from 'pages/AboutPage';

export const routes = [
  {
    path: '/',
    exact: true,
    component: ChatPage,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: ChatPage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
];