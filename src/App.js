// import {Route, BrowserRouter} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import Login from './login/login.js'
import Register from './Register/Register';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function App() {
  const [userId, setUserId] = useState();
  // localStorage.setItem(userId);




  const router = createBrowserRouter([
    {
      path: '/',
      element: <Register  />
    },
    {
      path: '/login',
      element: <Login  setUserId={setUserId} />
    },
    {
      path: `/home/`,
      element: <div><Navbar /> <Home userId={userId} /></div>,
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
