import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import TradingDetailsCreate from "./pages/MGI/TradingDetails/TradingDetailsCreate";
import routes from "@/routes"; // Ensure routes are imported
import IndicatorsCreate from "./pages/MGI/Indicators/IndicatorsCreate";
import CandleImagesCreate from "./pages/MGI/CandlesImages/CandleImagesCreate";
import RiskTradesCreate from "./pages/MGI/RiskTrade/RiskTradeCreate";
import TradeDetailsView from "./pages/MGI/TradingDetails/TradeDetailsView";
import TradeDetailsUpdate from "./pages/MGI/TradingDetails/TradeDetailsUpdate";
import IndicatorsView from "./pages/MGI/Indicators/IndicatorsView";
import IndicatorsUpdate from "./pages/MGI/Indicators/IndicatorsUpdate";
import CandleImagesView from "./pages/MGI/CandlesImages/CandleImagesView";
import CandleImagesUpdate from "./pages/MGI/CandlesImages/CandleImagesUpdate";
import RiskTradeDetails from "./pages/MGI/RiskTrade/RiskTradeDetails";
import RiskTradeUpdate from "./pages/MGI/RiskTrade/RiskTradeUpdate";
import TaskCreate from "./pages/MGI/TaskPlans/TaskCreate";
import TaskDetails from "./pages/MGI/TaskPlans/TaskDetails";
import TaskUpdate from "./pages/MGI/TaskPlans/TaskUpdate";
import TradingReasonsCreate from "./pages/MGI/TradeReasons/TradeReasonsCreate";
import TradeReasonsView from "./pages/MGI/TradeReasons/TradeReasonsView";
import TradeReasonsUpdate from "./pages/MGI/TradeReasons/TradeReasonsUpdate";

function App() {
  return (
    <Routes>
      {/* Main layouts */}
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />

      {/* Individual hidden routes */}
      <Route path="/trade-details-create" element={<TradingDetailsCreate />} />
      <Route path="/trade-details/:id" element={<TradeDetailsView />} />
      <Route path="/trade-details-edit/:id" element={<TradeDetailsUpdate />} />
      
      <Route path="/trade-reasons-create" element={<TradingReasonsCreate />} />
      <Route path="/trade-reasons/:id" element={<TradeReasonsView />} />
      <Route path="/trade-reasons-edit/:id" element={<TradeReasonsUpdate />} />

      <Route path="/indicators-create" element={<IndicatorsCreate />} />
      <Route path="/indicators-view/:id" element={<IndicatorsView />} />
      <Route path="/indicators-edit/:id" element={<IndicatorsUpdate />} />

      <Route path="/candles-image-create" element={<CandleImagesCreate />} />
      <Route path="/candle-view/:id" element={<CandleImagesView />} />
      <Route path="/candle-images-edit/:id" element={<CandleImagesUpdate />} />

      <Route path="/risk-trade-create" element={<RiskTradesCreate />} />
      <Route path="/risk-trade-view/:id" element={<RiskTradeDetails />} />
      <Route path="/risk-trade-edit/:id" element={<RiskTradeUpdate />} />
      

  s
      <Route path="/task-create" element={<TaskCreate />} />
      <Route path="/task-details-view/:id" element={<TaskDetails />} />
      <Route path="/task-update-edit/:id" element={<TaskUpdate />} />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
