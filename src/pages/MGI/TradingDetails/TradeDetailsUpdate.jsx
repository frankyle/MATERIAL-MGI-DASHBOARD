import React, { useState, useEffect } from 'react';
import axiosInstance from '../../auth/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSave, FaUndo } from 'react-icons/fa';

const TradeDetailsUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trade, setTrade] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchTradeDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/tradedetails/tradedetails/${id}/`);
        if (response.data) {
          setTrade(response.data);
          setFormData(response.data);
        } else {
          console.error('No trade data found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trade details:', error);
        setLoading(false);
      }
    };

    fetchTradeDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (formData.user) {
      data.append('user', formData.user);
    }
    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        data.append(key, formData[key]);
      } else if (formData[key] !== trade[key]) {
        data.append(key, formData[key]);
      }
    });

    try {
      await axiosInstance.put(`/api/tradedetails/tradedetails/${id}/`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Trade details updated successfully');
      navigate(`/dashboard/trading-Idea`);
    } catch (error) {
      console.error('Error updating trade details:', error);
      alert('Failed to update trade details');
    }
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Edit Trade Details</h1>

      <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-md space-y-6">
        {/* Grid Layout for Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="currency_pair" className="text-lg font-medium">Currency Pair:</label>
            <input
              type="text"
              name="currency_pair"
              value={formData.currency_pair || ''}
              onChange={handleInputChange}
              id="currency_pair"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="traders_idea_name" className="text-lg font-medium">Traders Idea Name:</label>
            <input
              type="text"
              name="traders_idea_name"
              value={formData.traders_idea_name || ''}
              onChange={handleInputChange}
              id="traders_idea_name"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleInputChange}
              className="form-checkbox"
            />
            <span>Active</span>
          </label>
          </div>
        </div>

        {/* Image Upload Inputs for Candles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['idea_candle','idea_candle_two', 'youtube_candle', 'line_graph_candle', 'daily_candle', 'four_hour_candle', 'two_hour_candle', 'hour_candle', 'signal_candle', 'entry_candle', 'breakeven_candle', 'take_profit_one_candle', 'take_profit_two_candle', 'stoploss_candle'].map((candleType) => (
            <div key={candleType} className="flex flex-col gap-2">
              <label htmlFor={candleType} className="text-lg font-medium">{candleType.replace('_', ' ').toUpperCase()} Image:</label>
              <input
                type="file"
                name={candleType}
                onChange={handleFileChange}
                id={candleType}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {formData[candleType] && formData[candleType] instanceof File && (
                <img
                  src={URL.createObjectURL(formData[candleType])}
                  alt={candleType}
                  className="mt-2 w-24 h-24 object-contain border border-gray-300 rounded-lg"
                />
              )}

              {/* Displaying already saved image if available */}
              {trade[candleType] && !formData[candleType] && (
                <img
                  src={trade[candleType]}
                  alt={candleType}
                  className="mt-2 w-24 h-24 object-contain border border-gray-300 rounded-lg"
                />
              )}
            </div>
          ))}
        </div>

        {/* Save and Cancel Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            <FaSave size={18} className="inline mr-2" />
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => navigate(`/trade-details`)}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray- 700 transition duration-300"
          >
            <FaUndo size={18} className="inline mr-2" />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TradeDetailsUpdate;