import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../pages/auth/axiosInstance';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import CreateButton from '../../../utils/CreateButton';

const IndicatorsTable = () => {
  const [tradingIndicators, setTradingIndicators] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchTradingIndicators = async () => {
      try {
        const response = await axiosInstance.get('/api/tradingindicators/tradingindicators/');
        if (response.data && response.data.results) {
          setTradingIndicators(response.data.results);
        }
      } catch (error) {
        console.error("Error fetching trading indicators:", error);
      }
    };

    fetchTradingIndicators();
  }, []);

  const handleView = (id) => {
    navigate(`/indicators-view/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/indicators-edit/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this indicator?');
    if (confirmed) {
      try {
        await axiosInstance.delete(`/api/tradingindicators/tradingindicators/${id}/`);
        setTradingIndicators(tradingIndicators.filter((indicator) => indicator.id !== id));
        alert('Indicator deleted successfully.');
      } catch (error) {
        console.error("Error deleting trading indicator:", error);
        alert('Failed to delete indicator.');
      }
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <CreateButton text="Confirm Indicators" redirectTo="/indicators-create" />  
      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Currency Pair</th>
            <th scope="col" className="px-6 py-3">Candle Pattern</th>
            <th scope="col" className="px-6 py-3">Fibonacci Level</th>
            <th scope="col" className="px-6 py-3">Session</th>
            <th scope="col" className="px-6 py-3">5 Min Order Block</th>
            <th scope="col" className="px-6 py-3">Previous Day Color Structure</th>
            <th scope="col" className="px-6 py-3">Asian Kill Zone</th>
            <th scope="col" className="px-6 py-3">London Kill Zone</th>
            <th scope="col" className="px-6 py-3">New York Kill Zone</th>
            <th scope="col" className="px-6 py-3">Flip 4-Hour Candle</th>
            <th scope="col" className="px-6 py-3">15 Min Break of Structure</th>
            <th scope="col" className="px-6 py-3">FVG Blocks</th>
            <th scope="col" className="px-6 py-3">Color UT Alert</th>
            <th scope="col" className="px-6 py-3">Crossover EMAs</th>
            <th scope="col" className="px-6 py-3">Pips Stoploss</th>
            <th scope="col" className="px-6 py-3">Pips Gained</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tradingIndicators.length > 0 ? (
            tradingIndicators.map((indicator) => (
              <tr key={indicator.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 text-black font-bold">{indicator.currency_pair}</td>
                <td className="px-6 py-4 text-black">{indicator.candle_pattern}</td>
                <td className="px-6 py-4 text-black">{indicator.fibonacci_level}</td>
                <td className="px-6 py-4 text-black">{indicator.session}</td>
                <td className={`px-6 py-4 ${indicator.five_min_order_block ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.five_min_order_block ? 'Yes' : 'No'}
                </td>
                <td className={`px-6 py-4 ${indicator.previous_day_color_structure ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.previous_day_color_structure ? 'Yes' : 'No'}
                </td>
                <td className={`px-6 py-4 ${indicator.asian_kill_zone ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.asian_kill_zone ? 'Yes' : 'No'}
                </td>
                <td className={`px-6 py-4 ${indicator.london_kill_zone ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.london_kill_zone ? 'Yes' : 'No'}
                </td>
                <td className={`px-6 py-4 ${indicator.newyork_kill_zone ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.newyork_kill_zone ? 'Yes' : 'No'}
                </td>
                <td className={`px-6 py-4 ${indicator.flip_four_hour_candle ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.flip_four_hour_candle ? 'Yes' : 'No'}
                </td>
                <td className={`px-6 py-4 ${indicator.fifteen_min_break_of_structure ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.fifteen_min_break_of_structure ? 'Yes' : 'No'}
                </td>
                <td className={`px-6 py-4 ${indicator.fvg_blocks ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.fvg_blocks ? 'Yes' : 'No'}
                </td>
                <td className={`px-6 py-4 ${indicator.change_color_ut_alert ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.change_color_ut_alert ? 'Yes' : 'No'}
                </td>
                <td className={`px-6 py-4 ${indicator.fractal_and_alligator ? 'text-green-500' : 'text-red-500'}`}>
                  {indicator.fractal_and_alligator ? 'Yes' : 'No'}
                </td>
                <td className="px-6 py-4">{indicator.pips_stoplost}</td>
                <td className="px-6 py-4">{indicator.pips_gained}</td>

                <td className="px-6 py-4 flex space-x-3">
                  <button
                    onClick={() => handleView(indicator.id)}
                    className="text-yellow-500 hover:text-yellow-700"
                    title="View Indicator"
                  >
                    <FaEye size={20} />
                  </button>

                  <button
                    onClick={() => handleEdit(indicator.id)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit Indicator"
                  >
                    <FaEdit size={20} />
                  </button>

                  <button
                    onClick={() => handleDelete(indicator.id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete Indicator"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="17" className="px-6 py-4 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IndicatorsTable;
