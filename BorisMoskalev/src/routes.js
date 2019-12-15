import React from 'react';

import {Layout} from "components/Layout"
import {Messenger} from 'components/Messenger'
import {Profile} from 'components/Profile';

export const routes = [
    {
        path: '/',
        exact: true,
        render: () => {return <Layout content={<Messenger />} />; }
    },
    {
        path: '/chats/:id',
        exact: true,
        render: (params) => {return <Layout content={<Messenger chat={params.match.params.id} />} />; }
    },
    {
        path: '/profile/',
        exact: true,
        render: () => {return <Layout content={<Profile />} />;}
    }
];