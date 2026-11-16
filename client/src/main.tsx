import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NoteList from './components/NoteList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/main';
import Register from './Pages/Register';
import Login from './Pages/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children :[
      {
        index : true,
        element : <NoteList/>
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path : '/login',
        element : <Login/>
      }
    ],
    
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
