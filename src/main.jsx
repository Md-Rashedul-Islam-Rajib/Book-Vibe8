import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './pages/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ListedBook from './pages/ListedBook.jsx'
import PageToRead from './pages/PageToRead.jsx'
import BookDetails from './pages/BookDetails.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
      element: <Home></Home>,
      loader: async () => fetch('/data.json'),
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: async () => fetch('/data.json')
      
      },
      {
        path: '/listedbook',
        element: <ListedBook></ListedBook>
      },
      {
        path: '/pagetoread',
        element: <PageToRead></PageToRead>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="mx-32">
    <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
