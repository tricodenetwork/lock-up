"use client";
import React, { useState, useEffect } from "react";
import { Bell, Wallet, Search, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import StatsCard from "@/components/ui/StatsCard";
import WhiteBackground from "@/components/WhiteBackground";
import TransactionNotification from "@/components/TransactionNotification";
import { AnimatePresence } from "framer-motion";
import TransactionHistory from "@/components/TransactionHistory";

const DashBoard = () => {
  const [showNotification, setShowNotification] = useState(false);

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
    const timer1 = setTimeout(() => {
      setShowNotification(true);
    }, 1000);
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className='min-h-screen flex flex-col w-[95%] mx-auto overflow-hidden relative bg-blue-50 p-4 lg:p-10'>
      {/* Notification */}
      <AnimatePresence mode='wait'>
        {showNotification && <TransactionNotification />}
      </AnimatePresence>

      {/* Main Content */}
      <div className='mb-6'>
        <h5 className='text-xl sm:text-2xl font-semibold mb-6'>
          Welcome Back, User
        </h5>
        <WhiteBackground styles='bg-white p-4 sm:p-6 flex flex-col rounded-[16px] h-auto'>
          <p className='font-medium mb-6'>Asset Overview</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10'>
            {headerContents.map((item) => (
              <div key={item.name} className='flex flex-col'>
                <p className='font-medium mb-2 text-[#757575] text-sm'>
                  {item.name}
                </p>
                <p
                  style={{ color: item.color }}
                  className='font-bold text-[#1b1b1b] text-lg sm:text-xl md:text-2xl'
                >
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
          <div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center'>
            <span className='text-[#757575] mr-4 text-sm'>Wallet Address</span>
            <span className='text-[#1b1b1b] text-sm sm:text-base break-all'>
              1,2450xA1B2C3D4E5F67890G123H456I789J123K456L78M.67 SUI
            </span>
          </div>
        </WhiteBackground>
      </div>

      {/* Statistics Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 w-full'>
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
      <div className='grid grid-cols-1 gap-6'>
        {/* Transaction Details */}
        <TransactionHistory/>

        {/* Investment History */}
        {/* <div className='p-6 bg-white rounded-3xl overflow-hidden border-none shadow-none'>
          <div className='flex  flex-col mb-6 sm:flex-row justify-between items-start sm:items-center  gap-4'>
            <h3 className='text-base  font-bold text-appBlack'>
              Investment History
            </h3>
            <button className='flex items-center space-x-2 px-3 py-1 border rounded-lg text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start'>
              <span className='text-[#1B1B1B] text-xs font-bold'>
                Filter By
              </span>
              <Image
                src='/icons/filter.svg'
                alt='Filter'
                width={12}
                height={12}
              />
            </button>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b'>
                  <th className='text-left py-3 text-xs text-appBlack font-bold'>
                    Date
                  </th>
                  <th className='text-left py-3 text-xs text-appBlack font-bold'>
                    Amount Locked
                  </th>
                  <th className='text-left py-3 text-xs text-appBlack font-bold'>
                    Interest Rate
                  </th>
                  <th className='text-left py-3 text-xs text-appBlack font-bold'>
                    Duration
                  </th>
                  <th className='text-left py-3 text-xs text-appBlack font-bold'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, i) => (
                  <tr key={i} className='border-b'>
                    <td className='py-3 text-xs'>05/04/2024</td>
                    <td className='py-3 text-xs'>2,000 SUI</td>
                    <td className='py-3 text-xs'>5%</td>
                    <td className='py-3 text-xs'>3 months</td>
                    <td className='py-3'>
                      <p className='bg-[#E6F6E5] text-[#2D6A4F] px-2 py-1 w-[70px] text-center rounded-full text-xs'>
                        Completed
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashBoard;
