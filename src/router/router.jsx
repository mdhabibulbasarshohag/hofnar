import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import CommonLayout from "../layouts/CommonLayout";
import Contact from "../pages/Contact/Contact";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignUp from './../pages/SignUp/SignUp';
import LogIn from "../pages/LogIn/LogIn";
import DashboardMain from "../pages/Dashboard/DashboardMain/DashboardMain";
import AddFounds from "../pages/Dashboard/AddFounds/AddFounds";
import OpenDeposit from "../pages/Dashboard/OpenDeposit/OpenDeposit";
import Deposits from "../pages/Dashboard/Deposits/deposits";
import Withdraw from "../pages/Dashboard/Withdraw/Withdraw";
import Wallet from "../pages/Dashboard/Wallet/Wallet";
import History from "../pages/Dashboard/History/History";
import MyTeam from "../pages/Dashboard/MyTeam/MyTeam";
import Level1 from "../pages/Dashboard/MyTeam/Level1/Level1";
import Settings from "../pages/Dashboard/Settings/Settings";
import ChangePassword from "../pages/Dashboard/ChangePassword/ChangePassword.JSX";
import AffiiliateLink from "../pages/Dashboard/AffiiliateLink/AffiiliateLink";



const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/paymenthistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
           
            element: <DashboardMain />,
          },
          {
            path: "add-funds",
            element: <AddFounds />,
          },
          {
            path: "open-deposit",
            element: <OpenDeposit />,
          },
          {
            path: "deposits",
            element: <Deposits />,
          },
          {
            path: "withdraw",
            element: <Withdraw />,
          },
          {
            path: "wallet",
            element: <Wallet />,
          },
          {
            path: "history",
            element: <History />,
          },
          {
            path: "my-team",
            element: <MyTeam />,
            children: [
              {
                path: "",
                element: <Level1 />,
              },
              {
                path: "level-2",
                element: <Level1 />,
              },
              {
                path: "level-3",
                element: <Level1 />,
              },
            ],
          },
          {
            path: "/dashboard/affiiliate-link",
            element: <AffiiliateLink />,
          },
          {
            path: "/dashboard/setting",
            element: <Settings />,
          },
          {
            path: "/dashboard/change-password",
            element: <ChangePassword />,
          },
        ]
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },


  // {
  //   path: "/login",
  //   element: <LogIn />,
  // },
]);

export default router;
