import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../auth/axiosInstance';
import axios from 'axios';

const RiskTradesCreate = () => {
  const [formData, setFormData] = useState({
    currency_pair: '',
    risk_pips: '',
    risk_dollars: '',
    risk_tsh: '',
    gain_pips: '',
    gain_dollars: '',
    gain_tsh: '',
    date_of_trade: '',
    day_of_week: '',
    mt5_chart: null,
    tradeview_chart: null,
    mt5_positions: null,
  });
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setExchangeRate(response.data.rates.TZS);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };
    fetchExchangeRate();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'risk_dollars' || name === 'gain_dollars') {
      const dollarAmount = parseFloat(value);
      if (!isNaN(dollarAmount) && exchangeRate) {
        const convertedAmount = dollarAmount * exchangeRate;
        setFormData((prev) => ({
          ...prev,
          [name === 'risk_dollars' ? 'risk_tsh' : 'gain_tsh']: convertedAmount.toFixed(2),
        }));
      }
    }

    if (name === 'date_of_trade') {
      const date = new Date(value);
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
      setFormData((prev) => ({ ...prev, day_of_week: dayOfWeek }));
    }
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) form.append(key, value);
    });

    try {
      await axiosInstance.post('/api/risktrades/risktrades/', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Risk Trade created successfully!');
      navigate('/risk-trade');
    } catch (error) {
      console.error('Error creating risk trade:', error);
      alert('Failed to create risk trade.');
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Create Risk Trade</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
          <label className="block text-sm font-medium text-gray-700">Date of Trade</label>
          <input
            type="date"
            name="date_of_trade"
            value={formData.date_of_trade}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Day of the Week</label>
          <input
            type="text"
            name="day_of_week"
            value={formData.day_of_week}
            readOnly
            className="w-full px-4 py-2 border rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Currency Pair</label>
          <input
            type="text"
            name="currency_pair"
            value={formData.currency_pair}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Risk (Pips)</label>
          <input
            type="number"
            name="risk_pips"
            value={formData.risk_pips}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Risk (USD)</label>
          <input
            type="number"
            name="risk_dollars"
            value={formData.risk_dollars}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Risk (TZS)</label>
          <input
            type="number"
            name="risk_tsh"
            value={formData.risk_tsh}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gain (Pips)</label>
          <input
            type="number"
            name="gain_pips"
            value={formData.gain_pips}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gain (USD)</label>
          <input
            type="number"
            name="gain_dollars"
            value={formData.gain_dollars}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gain (TZS)</label>
          <input
            type="number"
            name="gain_tsh"
            value={formData.gain_tsh}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">MT5 Chart</label>
          <input
            type="file"
            name="mt5_chart"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">TradeView Chart</label>
          <input
            type="file"
            name="tradeview_chart"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">MT5 Positions</label>
          <input
            type="file"
            name="mt5_positions"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Risk Trade'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RiskTradesCreate;
