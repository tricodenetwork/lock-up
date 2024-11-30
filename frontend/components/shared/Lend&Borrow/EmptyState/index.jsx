"use client"

import React from 'react';
import Image from 'next/image';

export function EmptyState({type}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] rounded-lg p-8">
      <div className="w-32 h-32 relative bg-gray-100 rounded-full mb-6 flex items-center justify-center">
        <Image
          src="/assets/images/EmptyState.png"
          alt="Empty state"
          fill
          className="opacity-50"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Not qualified to {type} asset</h3>
      <p className="text-gray-500 text-center max-w-md mb-6">
        You do not have enough collateral to qualify you to {type} money
        Start by providing collateral
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Provide collateral
      </button>
    </div>
  );
}