import {
  HomeIcon,
  UserCircleIcon,
  UsersIcon,
  LightBulbIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  TableCellsIcon,
  BellAlertIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  InformationCircleIcon 
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import TradeDetailsTable from "./pages/MGI/TradingDetails/TradeDetailsTable";
import RiskTradesTable from "./pages/MGI/RiskTrade/RiskTradeTable";
import CandleImages from "./pages/MGI/CandlesImages/CandleImages";
import TasksTable from "./pages/MGI/TaskPlans/TasksTable";
import TradeReasonsTable from "./pages/MGI/TradeReasons/TradeReasonsTable";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <LightBulbIcon {...icon} />,
        name: "Trading Idea",
        path: "/trading-Idea",
        element: <TradeDetailsTable />,
      },
      {
        icon: <InformationCircleIcon  {...icon} />,
        name: "Trading Reasons",
        path: "/trading-reasons",
        element: <TradeReasonsTable />,
      },
      
      {
        icon: <ShieldCheckIcon {...icon} />,
        name: "Risk Management",
        path: "/risk-trade",
        element: <RiskTradesTable />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "Weekly Report",
        path: "/candle-images",
        element: <CandleImages />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "Task Plans",
        path: "/tasks",
        element: <TasksTable />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "All Users",
        path: "/all-users",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <BellAlertIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
