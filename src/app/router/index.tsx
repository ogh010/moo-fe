import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/app/layout/RootLayout";
import GlovbalErrorPage from "@/app/error/GlovbalErrorPage";
import Join from "@/pages/test/Join";
import { lazy, Suspense } from "react";
import PageLoader from "@/shared/ui/PageLoader";

// test lazy
const Test = lazy(() => import("@/pages/test/Test")); // 테스트페이지1
const Eslint = lazy(() => import("@/pages/test/Eslint")); // 테스트페이지2
// moo lazy
const UserJoin = lazy(() => import("@/pages/user/Join"));
const UserLogin = lazy(() => import("@/pages/user/Login"));
const SeatPass = lazy(() => import("@/pages/seat/Pass"));
const SeatSelect = lazy(() => import("@/pages/seat/Select"));
const MypageCoupon = lazy(() => import("@/pages/mypage/Coupon"));
const MypageAlarm = lazy(() => import("@/pages/mypage/Alarm"));
const MypageMenu = lazy(() => import("@/pages/mypage/Menu"));
const TicektPassSelect = lazy(() => import("@/pages/ticket/PassSelect"));
const TicketPassDetail = lazy(() => import("@/pages/ticket/PassDetail"));
const TicketPassPay = lazy(() => import("@/pages/ticket/PassPay"));
const PayCard = lazy(() => import("@/pages/pay/Card"));

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
      // moo
      // 좌석 - 좌석현황
      {
        path: "/seat/pass",
        element: (
          <Suspense fallback={<PageLoader />}>
            <SeatPass />
          </Suspense>
        ),
      },
      // 좌석 - 좌석선택
      {
        path: "/seat/select",
        element: (
          <Suspense fallback={<PageLoader />}>
            <SeatSelect />
          </Suspense>
        ),
      },
      // mypage - 쿠폰함
      {
        path: "/mypage/coupon",
        element: (
          <Suspense fallback={<PageLoader />}>
            <MypageCoupon />
          </Suspense>
        ),
      },
      // mypage - 알림함
      {
        path: "/mypage/alarm",
        element: (
          <Suspense fallback={<PageLoader />}>
            <MypageAlarm />
          </Suspense>
        ),
      },
      // mypage - 메뉴/프로필
      {
        path: "/mypage/menu",
        element: (
          <Suspense fallback={<PageLoader />}>
            <MypageMenu />
          </Suspense>
        ),
      },
      // 결제 - 이용권 선택
      {
        path: "/ticket/pass-select",
        element: (
          <Suspense fallback={<PageLoader />}>
            <TicektPassSelect />
          </Suspense>
        ),
      },
      // 결제 - 이용권 상세 선택
      {
        path: "/ticket/pass-detail",
        element: (
          <Suspense fallback={<PageLoader />}>
            <TicketPassDetail />
          </Suspense>
        ),
      },
      // 결제 - 이용권 결제
      {
        path: "/ticket/pass-pay",
        element: (
          <Suspense fallback={<PageLoader />}>
            <TicketPassPay />
          </Suspense>
        ),
      },
      // 결제 - 결제(카드사)
      {
        path: "/pay/card",
        element: (
          <Suspense fallback={<PageLoader />}>
            <PayCard />
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
  //moo
  // 유저 - 회원가입
  {
    path: "/user/join",
    element: (
      <Suspense fallback={<PageLoader />}>
        <UserJoin />
      </Suspense>
    ),
  },
  // 유저 - 로그인
  {
    path: "/user/login",
    element: (
      <Suspense fallback={<PageLoader />}>
        <UserLogin />
      </Suspense>
    ),
  },
]);

export default router;
