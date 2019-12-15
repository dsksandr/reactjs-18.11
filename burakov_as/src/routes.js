import { Profile } from 'pages/Profile';
import { AboutPage } from 'pages/AboutPage';
import { MessengerRedux } from 'containers/messengerContainer';

export const routes = [
  {
    path: '/',
    exact: true,
    component: MessengerRedux,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: MessengerRedux,
  }
]