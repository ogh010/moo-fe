import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import GlovbalErrorPage from "../error/GlovbalErrorPage";
import Join from "@/pages/user/Join";
import { lazy, Suspense } from "react";
import PageLoader from "@/shared/ui/PageLoader";

// lazy
const Test = lazy(() => import("@/pages/user/Test")); // 테스트페이지1
const Eslint = lazy(() => import("@/pages/user/Eslint")); // 테스트페이지2

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
        element: (
          <Suspense fallback={<PageLoader />}>
            <Test />
          </Suspense>
        ),
      },
      {
        path: "/readme",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Eslint />
          </Suspense>
        ),
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
