// import {Route, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import Login from './login/login.js'
import Register from './Register/Register';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function App() {
  // const userId = localStorage.getItem('token');
  const [userId, setUserId] = useState('');
  const getUserId = (id) => {
    setUserId(id);
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Register getUserId={getUserId} />
    },
    {
      path: '/login',
      element: <Login getUserId={getUserId} />
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
