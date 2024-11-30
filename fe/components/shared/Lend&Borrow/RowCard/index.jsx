import React from 'react';

export default function RowCard({
  sender,
  isVerified = false,
  availableSUI,
  minSUI,
  interestRate
}) {
  return (
    <div className="flex w-full items-center justify-between py-4 px-6 border-b border-gray-100 overflow-x-auto">
      <div className="flex flex-col w-[40rem] items-start gap-3">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-900">{sender}</span>
          {isVerified && (
            <span className="w-4 h-4 bg-yellow-400 rounded-full inline-flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </span>
          )}
        </div>

        <div className="flex w-full">
          <div className="text-sm text-gray-600">
            {availableSUI} SUI available • Min. {minSUI} SUI to receive
          </div>
        </div>
      </div>

      <div className="text-gray-900 w-full">{interestRate} Weekly</div>

      <div className="flex items-center space-x-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Borrow
        </button>
      </div>
    </div>
  );
}