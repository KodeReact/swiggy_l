import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import  About from './components/About';
import  Error from './components/Error';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
const Contact=lazy(()=>import("./components/Contact"))

const AppLayout=()=>{
    return(
        <div className="w-screen h-screen">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRoute=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Suspense fallback={<Shimmer/>}><Contact/></Suspense>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>);