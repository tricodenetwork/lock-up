"use client";
import React, { useState, useEffect, useContext, use } from "react";
import { Bell, Wallet, Search, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import StatsCard from "@/components/ui/StatsCard";
import WhiteBackground from "@/components/WhiteBackground";
import TransactionNotification from "@/components/TransactionNotification";
import { AnimatePresence } from "framer-motion";
import TransactionHistory from "@/components/TransactionHistory";
import { LoginContext } from "@/contexts/ZkLoginContext";
import { LoginContextType } from "@/types/todo";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserBalances } from "@/redux/slices/userBalancesSlice";
import { useSuiClient } from "@mysten/dapp-kit";

const DashBoard = () => {
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useAppDispatch();
  const { availableSui, lockedSui, loading, error } = useAppSelector(
    (state) => state.userBalances
  );
  const client = useSuiClient();

  const { address } = useContext(LoginContext) as LoginContextType;

  // Helper to round to 2 decimal places
  const round2 = (val: number) => Math.round(val * 100) / 100;

  const headerContents = [
    {
      name: "Total Balance",
      amount: error ? "Error" : `${round2(availableSui + lockedSui)} SUI`,
    },
    {
      name: "Credit Score",
      amount: "0",
      color: "#27A943",
    },
    {
      name: "Locked Assets",
      amount: error ? "Error" : `${round2(lockedSui)} SUI`,
    },
    {
      name: "Available Balance",
      amount: error ? "Error" : `${round2(availableSui)} SUI`,
    },
    {
      name: "Monthly Yield",
      amount: "1.2%",
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

  // Fetch available SUI using shared redux thunk
  useEffect(() => {
    if (address) {
      dispatch(fetchUserBalances({ address, client }));
    }
  }, [address]);

  return (
    <div className="min-h-screen flex flex-col w-[95%] mx-auto overflow-hidden relative bg-blue-50 p-4 lg:p-10">
      {/* Notification */}
      <AnimatePresence mode="wait">
        {showNotification && <TransactionNotification />}
      </AnimatePresence>

      {/* Main Content */}
      <div className="mb-6">
        <h5 className="text-xl sm:text-2xl font-semibold mb-6">
          Welcome Back, User
        </h5>
        <WhiteBackground styles="bg-white p-4 sm:p-6 flex flex-col rounded-[16px] h-auto">
          <p className="font-medium mb-6">Asset Overview</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
            {headerContents.map((item) => (
              <div key={item.name} className="flex flex-col">
                <p className="font-medium mb-2 text-[#757575] text-sm">
                  {item.name}
                </p>
                <p
                  style={{ color: item.color }}
                  className="font-bold text-[#1b1b1b] text-lg sm:text-xl md:text-2xl"
                >
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center">
            <span className="text-[#757575] mr-4 text-sm">Wallet Address</span>
            <span className="text-[#1b1b1b] text-sm sm:text-base break-all">
              {address}
            </span>
          </div>
        </WhiteBackground>
      </div>

      {/* Statistics Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 w-full">
        {statsContents.map((item) => (
          <StatsCard
            key={item.name}
            name={item.name}
            amount={item.amount}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div> */}

      {/* Tables */}
      <div className="grid grid-cols-1 gap-6">
        {/* Transaction Details */}
        <TransactionHistory />
      </div>
    </div>
  );
};

export default DashBoard;
