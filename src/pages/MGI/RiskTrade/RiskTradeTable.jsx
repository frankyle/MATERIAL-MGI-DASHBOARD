import TradingTable from "./TradingTable";
import TradingBalanceChart from "./TradingBalanceChart";
import RiskTrades from "./RiskTrades";

function RiskTradesTable() {
  return (
    <div className="space-y-10">
      <RiskTrades/>
      <TradingTable />
      <TradingBalanceChart />
    </div>
  );
}

export default RiskTradesTable;
