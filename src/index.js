import React, { Suspense, lazy, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './component/Header';
import Body from './component/Body';
import Contactpage from './component/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Errorpage from './component/Error';
import RestMenu from './component/Restaurantmenu';
import Shimmer from './component/Shimmer';
import UserContext from './utils/UserContext';
// import About from './component/About';
// import Grocery  from './component/Grocery';

const root = ReactDOM.createRoot(document.getElementById('root'))

const Grocery = lazy(() => import('./component/Grocery'))
const About = lazy(() => import('./component/About'))

const Applayout = () => {

    const { userName } = useContext(UserContext);
    const [name, setname] = useState('💥')

    console.log(userName);

    return (<div className='main-container-of-all'>
        <UserContext.Provider value={{ userName: name, setname }}>
            <Header />
            <Outlet />
        </UserContext.Provider>
    </div >
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
                element:
                    <Suspense fallback={<Shimmer />}>
                        <About />
                    </Suspense>
            },
            {
                path: '/contact',
                element: <Contactpage name={"vaigarai (class)"} location={"chennai (class)"} />
            },
            {
                path: '/restaurant/:id',
                element: <RestMenu />
            },
            {
                path: '/Grocery',
                element: <Suspense
                    fallback={<Shimmer />}><Grocery />
                </Suspense>
            }
        ],
        errorElement: <Errorpage />
    },
])

root.render(<RouterProvider router={layout} />);
