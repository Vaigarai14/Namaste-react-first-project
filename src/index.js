import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './component/Header';
import Body from './component/Body';
import Aboutpage from './component/About';
import Contactpage from './component/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Errorpage from './component/Error';

const root = ReactDOM.createRoot(document.getElementById('root'))


const Applayout = () => {
    return (<div className='main-container-of-all'>
        <Header />
        <Outlet />
    </div>
    )
}

const layout = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Aboutpage />
            },
            {
                path: '/contact',
                element: <Contactpage />
            }
        ],
        errorElement: <Errorpage />
    },
])

root.render(<RouterProvider router={layout} />);
