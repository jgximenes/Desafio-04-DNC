//Import React
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Import Style
import './global.scss'

//Import views
import Tasks from './assets/views/tasks/tasks'
import Edit from './assets/views/edit/edit'
import Delete from './assets/views/delete/delete'
import Add from './assets/views/add/add';

//Import db
import {tasks_mock} from './mock/bd.mock'
import Details from './assets/views/details/details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks data={tasks_mock}/>,
  },

  {
    path: "/edit/:editId",
    element: <Edit data={tasks_mock}/>,
  },

  {
    path: "/delete/:deleteId",
    element: <Delete data={tasks_mock}/>,
  },

  {
    path: "/add",
    element: <Add />,
  },

  {
    path: "/details/:detailsId",
    element: <Details data={tasks_mock}/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
