import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Quiz from "./components/Quiz";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default App;
