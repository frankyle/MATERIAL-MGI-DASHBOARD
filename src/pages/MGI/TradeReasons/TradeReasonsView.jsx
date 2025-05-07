import React, { useState, useEffect } from 'react';
import axiosInstance from '../../auth/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const TradeReasonsView = () => {
  const [trade, setTrade] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTradeDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/tradereasons/tradereasons/${id}/`);
        if (response.data) {
          setTrade(response.data);
        } else {
          console.error('No trade data found for this ID');
        }
      } catch (error) {
        console.error('Error fetching trade reasons:', error);
      }
    };

    fetchTradeDetails();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const imageFields = {
    idea_candle: 'Idea Candle',
    idea_candle_two: 'Idea Candle Two',
    youtube_candle: 'YouTube Candle',
    volumetic_rejection_candle: 'Volumetric Rejection Candle',
    fibonnaci_candle: 'Fibonacci Candle',
    ICT_killzone_candle: 'ICT Killzone Candle',
    ichimoku_candle: 'Ichimoku Candle',
    ema_cross_alert_candle: 'EMA Cross Alert Candle',
    ICT_institutional_order_candle: 'ICT Institutional Order Candle',
    daily_high_low_candle: 'Daily High/Low Candle',
    all_indicators_candle: 'All Indicators Candle',
    blog_trade_post_candle: 'Blog Trade Post Candle',
    blog_mt5_post_candle: 'Blog MT5 Post Candle',
    stoploss_candle: 'Stop Loss Candle',
  };

  const imageUrls = Object.entries(imageFields)
    .map(([key, label]) => ({ url: trade?.[key], label }))
    .filter(({ url }) => url);

  if (!trade) {
    return <div className="text-center text-gray-600 mt-10">Loading trade details...</div>;
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto font-sans leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">📈 Trade Breakdown: {trade.currency_pair}</h1>
      <p className="text-gray-600 italic mb-6">
        Dive deep into the reasoning and visual confirmations behind this trade setup.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🧾 Trade Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <p><strong>Pair:</strong> {trade.currency_pair}</p>
          <p><strong>Idea Name:</strong> {trade.traders_idea_name}</p>
          <p><strong>Signal:</strong> {trade.trade_signal}</p>
          <p>
            <strong>Status:</strong>
            <span className={`ml-2 px-3 py-1 rounded-full text-white ${trade.is_active ? 'bg-green-600' : 'bg-red-600'}`}>
              {trade.is_active ? 'Active' : 'Inactive'}
            </span>
          </p>
          <p><strong>Posted On:</strong> {formatDate(trade.created_at)}</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">🕯️ Candle Confirmations</h2>
        <p className="text-gray-600 mb-6">
          Below are various candle chart snapshots used to justify this trade. Each one highlights different technical confirmations from indicators, market structure, or price action strategies.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(imageFields).map(([key, label], index) => (
            <div key={key} className="text-center">
              <p className="text-sm font-medium mb-1">{label}</p>
              {trade[key] ? (
                <img
                  src={trade[key]}
                  alt={label}
                  onClick={() => openModal(index)}
                  className="w-full h-28 object-cover rounded-md border shadow cursor-pointer hover:scale-105 transition-transform"
                />
              ) : (
                <p className="text-gray-400 text-sm">No image available</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => navigate('/trade-reasons')}
          className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          ← Back to List
        </button>

        <button
          onClick={() => navigate(`/trade-reasons-edit/${id}`)}
          className="px-6 py-2 bg-yellow-500 text-white rounded-full shadow hover:bg-yellow-600 transition"
        >
          ✏️ Edit Trade Entry
        </button>
      </div>

      {modalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
    onClick={closeModal}
  >
    <div
      className="bg-white p-6 rounded-xl max-w-3xl w-full max-h-screen overflow-auto relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image label on top */}
      <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
        {imageUrls[currentImageIndex]?.label}
      </h3>

      {/* Image itself */}
      <img
        src={imageUrls[currentImageIndex]?.url}
        alt={imageUrls[currentImageIndex]?.label}
        className="max-w-full max-h-[80vh] object-contain mx-auto"
      />

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handlePrevImage}
        disabled={imageUrls.length <= 1}
      >
        &lt;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handleNextImage}
        disabled={imageUrls.length <= 1}
      >
        &gt;
      </button>

      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl font-bold"
      >
        ✕
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default TradeReasonsView;
