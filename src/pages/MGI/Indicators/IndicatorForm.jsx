import React, { useState } from "react";

const IndicatorForm = () => {
  const [formData, setFormData] = useState({
    breakOfStructure4h: "",
    dailyHighLow: "",
    orderBlock1h: "",
    abcPattern: "",
    candlestickType: "",
    prevDailyCandleColor: "",
    prevCandleInterpretation: "",
    volumetric: "",
    volumetricDirection: "",
    fibonacci: "",
    fibonacciDirection: "",
    utAlert: "",
    utDirection: "",
    ictFvg: false,
    ictDirection: "",
    ictSession: "",
    sessionRelevance: "",
    tradeTime: "",
    finalDecision: "",
    tradeTaken: false,
    notes: "",
  });

  // Handle form change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Create Indicator Setup</h2>

      <form className="space-y-6">
        {/* Break of Structure 4H */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Break of Structure (4H)</label>
          <select
            name="breakOfStructure4h"
            value={formData.breakOfStructure4h}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Daily High or Low */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Daily High or Low Taken?</label>
          <select
            name="dailyHighLow"
            value={formData.dailyHighLow}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="Daily Low (for BUY setup)">Daily Low (for BUY setup)</option>
            <option value="Daily High (for SELL setup)">Daily High (for SELL setup)</option>
          </select>
        </div>

        {/* Order Block 1H */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Order Block & Break of Structure (1H)</label>
          <select
            name="orderBlock1h"
            value={formData.orderBlock1h}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="OB Hit">OB Hit (Order Block hit in 1H)</option>
            <option value="BOS Occurred">BOS Occurred (Break of Structure in 1H)</option>
          </select>
        </div>

        {/* ABC Pattern Formed */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">ABC Pattern Formed?</label>
          <select
            name="abcPattern"
            value={formData.abcPattern}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="Yes">Yes (entry ideally on B leg/session)</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Candlestick Type */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Candlestick Type at Entry</label>
          <select
            name="candlestickType"
            value={formData.candlestickType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="Bullish Engulfing">Bullish Engulfing</option>
            <option value="Small Body Candle">Small Body Candle</option>
            <option value="Pin Bar">Pin Bar</option>
          </select>
        </div>

        {/* Previous Daily Candle Color */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Previous Daily Candle Color</label>
          <select
            name="prevDailyCandleColor"
            value={formData.prevDailyCandleColor}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="Green">Green</option>
            <option value="Red">Red</option>
          </select>
        </div>

        {/* Volumetric Indicator */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Volumetric Indicator</label>
          <select
            name="volumetric"
            value={formData.volumetric}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="Break of Structure">Break of Structure</option>
            <option value="Market Structure Shift">Market Structure Shift</option>
            <option value="None">None</option>
          </select>
          <div className="mt-2">
            <label className="block mb-2">Direction</label>
            <select
              name="volumetricDirection"
              value={formData.volumetricDirection}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="Up">Up</option>
              <option value="Down">Down</option>
            </select>
          </div>
        </div>

        {/* Other Fields */}
        {/* Repeat similar structure for each field */}

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700"
            onClick={() => alert("Form Submitted")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default IndicatorForm;
