import React from "react";

const InvestmentDashboard = () => {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      {/* Investment Overview */}
      <h2 className="text-2xl font-semibold text-black mb-4 text-left">Investments</h2>
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/3">
          <p className="text-2xl font-bold text-[#1B1B1B]">5000 SUI</p>
          <span className="text-[#3A3A3A]">Total Locked Tokens</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/3">
          <p className="text-2xl font-bold text-[#1B1B1B]">5</p>
          <span className="text-[#3A3A3A]">Active Investments</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/3">
          <p className="text-2xl font-bold text-[#1B1B1B]">1250 SUI</p>
          <span className="text-[#3A3A3A]">Available Balance</span>
        </div>
      </div>

      {/* Lock Token Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black text-left mb-4">Lock Token</h2>
        <div className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Amount to Lock"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Duration"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Minimum Interest Rate"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div className="flex justify-start">
          <button className="mt-4 bg-[#0057DB] hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Confirm Lock
          </button>
        </div>
      </div>

      {/* Borrower Bids List */}
      <div>
        <h2 className="text-2xl font-semibold text-black text-left mb-4">Borrower Bids List</h2>
        <div className="flex space-x-2 mb-4">
          <button className="bg-black text-[#ECF4FF] px-4 py-2 rounded-lg">All</button>
          <button className="border border-black px-4 py-2 rounded-xl">Unaccepted</button>
          <button className="border border-black px-4 py-2 rounded-xl">Accepted</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-1/2 bg-white rounded-lg shadow-md">
            <thead>
              <tr className="border-b border-[#FFFFFF]">
                <th className="p-4 text-left">Borrower ID</th>
                <th className="p-4 text-left">Requested Amount</th>
                <th className="p-4 text-left">Proposed Interest Rate</th>
                <th className="p-4 text-left">Duration</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4">123456</td>
                  <td className="p-4">1000 USDT</td>
                  <td className="p-4">10%</td>
                  <td className="p-4">30 days</td>
                  <td className="p-4 text-[#000000] font-bold cursor-pointer">Accept</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDashboard;