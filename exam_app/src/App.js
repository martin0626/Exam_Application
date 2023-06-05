import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/Auth";
import RootPage from "./pages/Root";
import ExamsPage from "./pages/Exams";
import HomePage from "./pages/HomeP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/auth", element: <AuthPage /> },
      { path: "/exams", element: <ExamsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
