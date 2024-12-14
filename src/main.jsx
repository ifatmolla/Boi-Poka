import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root";
import "./index.css"
import Errorpage from "./Components/Errorpage/Errorpage";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookDetail from "./Components/BookDetail/BookDetail";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from "react-helmet-async";
const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:"books/:bookId",
        element:<BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json')
      },
      {
        path:"listedbooks",
        element:<ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path:'dashboard/:bookId',
        element:<Dashboard></Dashboard>,
      },
    ],
  },
])

ReactDOM.createRoot( document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <ToastContainer />
    <RouterProvider router={router} />;
    </HelmetProvider>
  </React.StrictMode>

);
