"use client"
import React, { useState, useEffect } from 'react';
import { Bell, Wallet, Search, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import StatsCard from "@/components/ui/StatsCard";
import WhiteBackground from "@/components/WhiteBackground";

const SenderPage = () => {
  const [isIntermediary, setIsIntermediary] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const headerContents = [
    {
      name: "Total Balance",
      amount: "1,245.67 SUI",
    },
    {
      name: "Credit Score",
      amount: "742",
      color: "#27A943",
    },
    {
      name: "Locked Assets",
      amount: "850.45 SUI",
    },
    {
      name: "Available Balance",
      amount: "395.22 SUI",
    },
    {
      name: "Monthly Yield",
      amount: "3.2%",
      color: "#27A943",
    },
  ];

  const statsContents = [
    {
      name: "Total Investments",
      color: "#F0E6F9",
      icon: "/assets/icons/money.svg",
      amount: "5,000 SUI",
    },
    {
      name: "Pending Transactions",
      color: "#FBE4E7",
      icon: "/assets/icons/arrow-red.svg",
      amount: "450 SUI",
    },
    {
      name: "Earnings from Interest",
      color: "#E4FBE9",
      icon: "/assets/icons/arrow-green.svg",
      amount: "1,250 SUI",
    },
    {
      name: "Pending Loan",
      color: "#FBE4E7",
      icon: "/assets/icons/arrow-red.svg",
      amount: "1,250 SUI",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-4 lg:p-10">
      {/* Notification */}
      {showNotification && (
        <div className="bg-[#E7E9F8] p-4 rounded-lg mb-6 border-2 border-[#0F27BD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center space-x-3 w-full">
            <div className="min-w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 sm:mt-0">
              <span className="bg-[#0F27BD] text-white text-sm font-bold w-5 h-5 flex items-center justify-center rounded-full">i</span>
            </div>
            <div className="flex-1">
              <span className="font-medium text-sm block mb-1">Transaction Update</span>
              <p className="text-[#252730] text-sm">
                Your transaction has been approved and <b>10.75UI</b>, and the equivalent of <b>₦103,000</b> has been released to your wallet. Tap <b>'View Details'</b> for more information.
              </p>
            </div>
          </div>
          <button className="bg-[#0057DB] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap w-full sm:w-auto">
            View Details
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="mb-6">
        <h5 className="text-xl sm:text-2xl font-semibold mb-6">Welcome Back, User</h5>
        <WhiteBackground styles="bg-white p-4 sm:p-6 flex flex-col rounded-[16px] h-auto">
          <p className="font-medium mb-6">Asset Overview</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
            {headerContents.map((item) => (
              <div key={item.name} className="flex flex-col">
                <p className="font-medium mb-2 text-[#757575] text-sm">{item.name}</p>
                <p
                  style={{ color: item.color }}
                  className="font-semibold text-[#1b1b1b] text-lg sm:text-xl md:text-2xl"
                >
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center">
            <span className="text-[#757575] mr-4 text-sm">Wallet Address</span>
            <span className="text-[#1b1b1b] text-sm sm:text-base break-all">
              1,2450xA1B2C3D4E5F67890G123H456I789J123K456L78M.67 SUI
            </span>
          </div>
        </WhiteBackground>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statsContents.map((item) => (
          <StatsCard
            key={item.name}
            name={item.name}
            amount={item.amount}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transaction Details */}
        <Card className="bg-white rounded-3xl overflow-hidden border-none shadow-none">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 mt-4">
                <h3 className="text-base sm:text-lg font-bold text-[#1B1B1B]">Transaction Details</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs sm:text-lg text-[#1B1B1B]">Sender</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isIntermediary}
                        onChange={() => setIsIntermediary(!isIntermediary)}
                      />
                      <div className="w-8 h-4 bg-gray-300 rounded-full peer-checked:bg-[#0057DB] transition-all relative">
                        <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all ${isIntermediary ? 'right-1' : 'left-1'}`}></div>
                      </div>
                    </label>
                    <span className="text-xs sm:text-lg text-[#1B1B1B]">Intermediary</span>
                  </div>
                  <button className="flex items-center space-x-2 px-3 py-1 border rounded-lg text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start">
                    <span className='text-[#1B1B1B] font-bold'>Filter By</span>
                    <Image src="/icons/filter.svg" alt="Filter" width={15} height={15} />
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="min-w-[800px] px-4 sm:px-0">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 text-xs sm:text-sm text-[#1B1B1B] font-bold">Date</th>
                        <th className="text-left p-3 text-xs sm:text-sm text-[#1B1B1B] font-bold">Sender Name</th>
                        <th className="text-left p-3 text-xs sm:text-sm text-[#1B1B1B] font-bold">SUI Received</th>
                        <th className="text-left p-3 text-xs sm:text-sm text-[#1B1B1B] font-bold">Local Currency</th>
                        <th className="text-left p-3 text-xs sm:text-sm text-[#1B1B1B] font-bold">Status</th>
                        <th className="text-left p-3 text-xs sm:text-sm text-[#1B1B1B] font-bold"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(6)].map((_, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-3 text-xs sm:text-sm">05/04/2024</td>
                          <td className="p-3 text-xs sm:text-sm">Nancy Tolu</td>
                          <td className="p-3 text-xs sm:text-sm">300 SUI</td>
                          <td className="p-3 text-xs sm:text-sm">₦100,000</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              i < 3 ? 'bg-[#E6F6E5] text-[#2D6A4F]' : 'bg-[#FFF3E0] text-[#C77900]'
                            }`}>
                              {i < 3 ? 'Completed' : 'Ongoing'}
                            </span>
                          </td>
                          <td className="p-3">
                            <button>
                              <Image src="/icons/idol.svg" alt="More" width={5} height={5} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investment History */}
        <Card className="bg-white rounded-3xl overflow-hidden border-none shadow-none">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 mt-4">
                <h3 className="text-base sm:text-lg font-medium">Investment History</h3>
                <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start">
                  <span className='text-[#1B1B1B] font-bold'>Filter By</span>
                  <Image src="/icons/filter.svg" alt="Filter" width={15} height={15} />
                </button>
              </div>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="min-w-[800px] px-4 sm:px-0">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 text-xs sm:text-sm text-[#gray-500] font-bold">Date</th>
                        <th className="text-left p-3 text-xs sm:text-sm text-[#gray-500] font-bold">Amount Locked</th>
                        <th className="text-left p-3 text-xs sm:text-sm text-[#gray-500] font-bold">Interest Rate</th>
                        <th className="text-left p-3 text-xs sm:text-sm text-[#gray-500] font-bold">Duration</th>
                        <th className="text-left p-3 text-xs sm:text-sm text-[#gray-500] font-bold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(6)].map((_, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-3 text-xs sm:text-sm">05/04/2024</td>
                          <td className="p-3 text-xs sm:text-sm">2,000 SUI</td>
                          <td className="p-3 text-xs sm:text-sm">5%</td>
                          <td className="p-3 text-xs sm:text-sm">3 months</td>
                          <td className="p-3">
                            <span className="bg-[#E6F6E5] text-[#2D6A4F] px-2 py-1 rounded-full text-xs">
                              Completed
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SenderPage;