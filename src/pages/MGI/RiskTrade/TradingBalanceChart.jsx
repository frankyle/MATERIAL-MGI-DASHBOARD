import React from "react";
import Chart from "react-apexcharts";

// Updated dummy data
const tradingData = [
  { date: '2025-03-29', balance: 10040 },
  { date: '2025-03-31', balance: 10020 },
  { date: '2025-04-02', balance: 10060 },
  { date: '2025-04-04', balance: 10040 },
  { date: '2025-04-06', balance: 10020 },
  { date: '2025-04-07', balance: 10060 },
  { date: '2025-04-08', balance: 10040 },
  { date: '2025-04-09', balance: 10100 },
  { date: '2025-04-10', balance: 10160 },
  { date: '2025-04-11', balance: 10200 },
  { date: '2025-04-12', balance: 10240 },
  { date: '2025-04-13', balance: 10280 },
  { date: '2025-04-14', balance: 10300 },
  { date: '2025-04-15', balance: 10340 },
  { date: '2025-04-16', balance: 10380 },
  { date: '2025-04-17', balance: 10420 },
  { date: '2025-04-18', balance: 10460 },
  { date: '2025-04-19', balance: 10500 },
  { date: '2025-04-20', balance: 10540 },
  { date: '2025-04-21', balance: 10580 },
  { date: '2025-04-22', balance: 10620 },
  { date: '2025-04-23', balance: 10660 },
  { date: '2025-04-24', balance: 10700 },
  { date: '2025-04-25', balance: 10740 },
  { date: '2025-04-26', balance: 10780 },
  { date: '2025-04-27', balance: 10820 },
  { date: '2025-04-28', balance: 10860 },
  { date: '2025-04-29', balance: 10900 },
  { date: '2025-04-30', balance: 10940 },
];

const TradingBalanceChart = () => {
  const chartOptions = {
    chart: {
      id: "balance-line-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: tradingData.map((_, index) => `Trade #${index + 1}`),
      labels: {
        style: {
          colors: "#555",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => `$${val}`, // Format the axis values with a dollar sign
        style: {
          colors: "#555",
        },
      },
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#0288d1"],
    markers: {
      size: 5,
    },
  };

  const series = [
    {
      name: "Account Balance",
      data: tradingData.map((entry) => entry.balance),
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Account Balance Over Time</h2>
      <Chart options={chartOptions} series={series} type="line" height={300} />
    </div>
  );
};

export default TradingBalanceChart;
