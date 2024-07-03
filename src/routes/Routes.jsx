import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../shared/Login";
import Register from "../shared/Register";
import AddSpots from "../pages/AddSpots";
import PrivateRoute from "./PrivateRoute";
import SpotDetails from "../pages/SpotDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () =>fetch('http://localhost:5000/spot')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/add-tourists-spot',
            element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>

        },
        {
          path: '/spot/:id',
          element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
          loader: ({ params }) =>fetch(`http://localhost:5000/spot/${params.id}`)
        }
      ]
    },
  ]);

export default router;