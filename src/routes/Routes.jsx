import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../pages/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import ListedBook from '../pages/ListedBook.jsx'
import PageToRead from '../pages/PageToRead.jsx'
import BookDetails from '../pages/BookDetails.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import ReadList from "../components/readList/ReadList.jsx";
import WishList from "../components/wishList/WishList.jsx";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
        },
        {
          path: '/book/:id',
          element: <BookDetails></BookDetails>,
          loader: () => fetch('/data.json')
        
        },
        {
          path: '/listedbook',
          element: <ListedBook></ListedBook>,
          loader: () => fetch('/data.json'),
          children: [
            {
              index: true,
              element: <ReadList></ReadList>,
              loader: () => fetch('/data.json'),
            },
            {
              path: 'wishlist',
              element: <WishList></WishList>,
              loader: () => fetch('/data.json')
            }
          ]
        },
        {
          path: '/pagetoread',
          element: <PageToRead></PageToRead>,
          loader: () => fetch('/data.json')
          
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    }
  ])