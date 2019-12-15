import {Layout} from 'components/Layout';
import {AboutPage} from 'pages/AboutPage';
import {Messenger} from 'components/Messenger';
import {MessageForm} from "components/MessageForm";
import {MessagesList} from "components/MessagesList";
import {Profile} from 'components/Profile';
import {MessengerRedux} from 'containers/MessengerContainer';

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
    path: '/chat/:id',
    exact: true,
    component: MessengerRedux,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
];