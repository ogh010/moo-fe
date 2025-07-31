import { createBrowserRouter } from "react-router-dom";
import Test from "../../pages/user/Test";
import RootLayout from "../layout/RootLayout";
import GlovbalErrorPage from "../error/GlovbalErrorPage";
import Join from "../../pages/user/Join";
/**
 * createBrowserRouter 정의
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <GlovbalErrorPage />,
    children: [
      {
        index: true,
        element: <Test />,
      },
    ],
  },
  {
    path: "/join",
    element: <Join />,
    errorElement: <GlovbalErrorPage />,
  },
]);

export default router;
