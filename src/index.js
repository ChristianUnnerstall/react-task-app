import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/global.scss';
import App from './app';
import Tasks from './components/tasks';
import Task from './components/task';
import NewTask from './components/newtask';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "tasks/new",
        element: <NewTask/>
      },
      {
        path: "tasks/",
        element: <Tasks />,
        loader: async ({ request, params }) => {
          return fetch(
            process.env.REACT_APP_REMOTE_API_URL_BASE + "/tasks/" ,{
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            }
          );
        },
      },
      {
        path: "tasks/:id",
        element: <Task />,
        loader: async ({ request, params }) => {
          return fetch(
            process.env.REACT_APP_REMOTE_API_URL_BASE + "/tasks/" + params.id ,{
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            }
          );
        },
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
