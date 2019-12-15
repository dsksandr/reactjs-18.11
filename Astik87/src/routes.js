import React from 'react';

import { Layout } from "./components/Layout"
import { MessengerRedux } from './containers/MessengerContainer';
import { Profile } from './components/Profile';

export const routes = [
    {
        path: '/',
        exact: true,
        render: () => {return <Layout content={<MessengerRedux />} />; } 
    },
    {
        path: '/chats/:id',
        exact: true,
        render: (params) => {return <Layout content={<MessengerRedux chatId={params.match.params.id} />} />; } 
    },
    {
        path: '/profile/',
        exact: true,
        render: () => {return <Layout content={<Profile />} />;}
    }
];