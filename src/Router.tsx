import { createBrowserRouter } from 'react-router-dom';
import { Client } from './page/client';
import { Home } from './page/client/Home';
import { Products } from './page/client/Products';
import { NotFound } from './page/client/NotFound';
import { Liked }  from './page/client/Liked';
import { Signin } from './page/client/Signin';
import { Checkauth, CheckauthAdmin } from './loaders/Authentication';
import { Authentication, AuthenticationAdmin } from './actions/Authenticate';
import { CardOpened } from './components/CardOpened';
import { Admin } from './page/admin/index';
import { AdminProducts } from './page/admin/AdminProducts';
import { AdminAdd } from './page/admin/AdminAdd';
import Dashboard from './components/admin/DashBoard';
import { SigninAdmin } from './page/admin/Signin';
import { Card } from './page/client/Card';

const router = createBrowserRouter([
    {
        path: '/',
        loader: Checkauth,
        element: <Client />,
        children: [
            {
                path: 'home',
                loader: Checkauth,
                element: <Home />,
            },
            {
                path: 'products',
                loader: Checkauth,
                element: <Products />,
            },
            {
                path: 'liked',
                loader: Checkauth,
                element: <Liked />,
            },
            {
                path: 'product/:productID',
                loader: Checkauth,
                element: <CardOpened />,
            },
            {
                path: 'card',
                loader: Checkauth,
                element: <Card />,
            },
        ],
    },
    {
        path: '/admin',
        element: <Admin />,
        loader: CheckauthAdmin,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
                loader: CheckauthAdmin,
            },
            {
                path: 'products',
                element: <AdminProducts />,
                loader: CheckauthAdmin,
            },
            {
                path: 'add',
                element: <AdminAdd />,
                loader: CheckauthAdmin,
            },
        ],
    },
    {
        path: 'signin',
        loader: Checkauth,
        action: Authentication,
        element: <Signin />,
    },
    {
        path: "admin/signin",
        action: AuthenticationAdmin,
        loader: CheckauthAdmin,
        element: <SigninAdmin />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
