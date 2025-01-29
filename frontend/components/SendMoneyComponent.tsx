// components/SendMoneyComponent.tsx
"use client";

import React, { useState } from "react";
import SelectComponent from "./SelectComponent";

const SendMoneyComponent: React.FC = () => {
  const [country, setCountry] = useState("");
  const [sendAmount, setSendAmount] = useState("0.00");
  const [receiveAmount, setReceiveAmount] = useState("0.00");
  const [receiveMethod, setReceiveMethod] = useState("");
  const [sendMethod, setSendMethod] = useState("");

  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "nz", label: "New Zealand" },
    { value: "ca", label: "Canada" },
    { value: "eu", label: "Europe" },
  ];

  const paymentMethods = [
    { value: "bank", label: "Bank Account" },
    { value: "card", label: "Credit/Debit Card" },
    { value: "BTC", label: "Wallet Address" },
  ];

  return (
    <div className='min-h-screen bg-main_bg flex flex-col items-center py-12 px-4'>
      <div className='max-w-3xl w-full'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-semibold text-appBlack mb-4'>
            The fast and trusted way to send money online
          </h1>
          <p className='text-gray-600'>
            Whether you need to send money to friends down the street or family
            across the globe, Eastern Union gets your funds there quickly and
            reliably.
          </p>
        </div>

        {/* Main Form */}
        <div className='bg-[#FFFFFF] rounded-lg shadow-sm p-8'>
          <h2 className='text-2xl font-bold text-appBlack mb-6'>
            Send money online
          </h2>

          <SelectComponent
            label="Receiver's country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            options={countryOptions}
            placeholder='Select country'
          />

          <div className='flex gap-4 mb-6'>
            <div className='flex-1'>
              <label className='block text-sm font-bold text-gray-700 mb-2'>
                Send amount
              </label>
              <input
                type='text'
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                className='w-full p-4 bg-gray-50 border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='flex items-center justify-center'>
              <span className='text-xl'>→</span>
            </div>

            <div className='flex-1'>
              <label className='block text-sm font-bold text-gray-700 mb-2'>
                Receive amount
              </label>
              <input
                type='text'
                value={receiveAmount}
                onChange={(e) => setReceiveAmount(e.target.value)}
                className='w-full p-4 bg-gray-50 border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>

          <SelectComponent
            label='How does your receiver want the money?'
            value={receiveMethod}
            onChange={(e) => setReceiveMethod(e.target.value)}
            options={paymentMethods}
            placeholder='Bank Account'
          />

          <SelectComponent
            label='How do you want to send to intermediary'
            value={sendMethod}
            onChange={(e) => setSendMethod(e.target.value)}
            options={paymentMethods}
            placeholder='Bank Transfer'
          />

          <button className='w-full bg-[#FFDD00] hover:bg-[#E3C500] text-appBlack font-semibold py-4 px-6 rounded-md mt-6'>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoneyComponent;
