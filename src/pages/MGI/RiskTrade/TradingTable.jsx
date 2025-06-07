import React from 'react';

const tradingData = [
    { date: '2025-03-29', pair: 'USD/JPY', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10040 },
    { date: '2025-03-31', pair: 'USD/CHF', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10020 },
    { date: '2025-04-02', pair: 'AUD/USD', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 80, balance: 10060 },
    { date: '2025-04-04', pair: 'USD/CHF', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10040 },
    { date: '2025-04-06', pair: 'AUD/USD', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10020 },
    
    // Adding more entries to meet 70% win rate:
    { date: '2025-04-07', pair: 'USD/JPY', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10060 },
    { date: '2025-04-08', pair: 'GBP/USD', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10040 },
    { date: '2025-04-09', pair: 'EUR/USD', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 80, balance: 10080 },
    { date: '2025-04-10', pair: 'USD/CHF', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10120 },
    { date: '2025-04-11', pair: 'AUD/USD', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10100 },
  
    { date: '2025-04-12', pair: 'USD/JPY', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10140 },
    { date: '2025-04-13', pair: 'EUR/USD', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10120 },
    { date: '2025-04-14', pair: 'GBP/USD', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 90, balance: 10160 },
    { date: '2025-04-15', pair: 'USD/CHF', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10200 },
    { date: '2025-04-16', pair: 'AUD/USD', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10180 },
  
    { date: '2025-04-17', pair: 'GBP/USD', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10220 },
    { date: '2025-04-18', pair: 'EUR/USD', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10200 },
    { date: '2025-04-19', pair: 'USD/JPY', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10240 },
    { date: '2025-04-20', pair: 'USD/CHF', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 70, balance: 10280 },
    { date: '2025-04-21', pair: 'AUD/USD', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10260 },
  
    { date: '2025-04-22', pair: 'GBP/USD', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10300 },
    { date: '2025-04-23', pair: 'EUR/USD', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10280 },
    { date: '2025-04-24', pair: 'USD/JPY', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10320 },
    { date: '2025-04-25', pair: 'USD/CHF', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10360 },
  
    { date: '2025-04-26', pair: 'AUD/USD', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10340 },
    { date: '2025-04-27', pair: 'GBP/USD', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10380 },
    { date: '2025-04-28', pair: 'EUR/USD', direction: 'Buy', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10420 },
    { date: '2025-04-29', pair: 'USD/JPY', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Win', profitLoss: 40, balance: 10460 },
    { date: '2025-04-30', pair: 'USD/CHF', direction: 'Sell', riskAmount: 20, riskPercent: '0.20%', rrRatio: 2, outcome: 'Loss', profitLoss: -20, balance: 10440 },
  ];

const TradingTable = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Trading Plan Table</h2>
      <table className="min-w-full text-sm text-left border border-gray-200">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th className="px-3 py-2 border">Trade No.</th>
            <th className="px-3 py-2 border">Date</th>
            <th className="px-3 py-2 border">Currency Pair</th>
            <th className="px-3 py-2 border">Direction</th>
            <th className="px-3 py-2 border">Risk ($)</th>
            <th className="px-3 py-2 border">Risk %</th>
            <th className="px-3 py-2 border">RRR</th>
            <th className="px-3 py-2 border">Outcome</th>
            <th className="px-3 py-2 border">Profit/Loss ($)</th>
            <th className="px-3 py-2 border">Balance ($)</th>
          </tr>
        </thead>
        <tbody>
          {tradingData.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-3 py-2 border">Trade #{idx + 1}</td>
              <td className="px-3 py-2 border">{row.date}</td>
              <td className="px-3 py-2 border">{row.pair}</td>
              <td className="px-3 py-2 border">{row.direction}</td>
              <td className="px-3 py-2 border">${row.riskAmount}</td>
              <td className="px-3 py-2 border">{row.riskPercent}</td>
              <td className="px-3 py-2 border">{row.rrRatio}</td>
              <td className={`px-3 py-2 border ${row.outcome === 'Win' ? 'text-green-600' : 'text-red-600'}`}>
                {row.outcome}
              </td>
              <td className="px-3 py-2 border">{row.profitLoss >= 0 ? `+$${row.profitLoss}` : `-$${Math.abs(row.profitLoss)}`}</td>
              <td className="px-3 py-2 border">${row.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradingTable;
