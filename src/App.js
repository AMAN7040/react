import React,{Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import '../index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login';
import Shimmer from './components/Shimmer';

const Grocery = lazy(()=> import('./components/Grocery'))



const AppLayout = () => {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>   
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
    ],
    errorElement: <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)