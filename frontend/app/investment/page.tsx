"use client";
import React, { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserBalances } from "@/redux/slices/userBalancesSlice";
import StatsCard from "../../components/ui/StatsCard";
import { Filter } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import toast from "react-hot-toast";
import { Transaction } from "@mysten/sui/transactions";
import clientConfig from "@/config/clientConfig";
import { LoginContext } from "@/contexts/ZkLoginContext";
import { LoginContextType } from "@/types/todo";
import { useSuiClient } from "@mysten/dapp-kit";

const IntermediaryPage = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();
  const { signAndSubmitTransaction, address } = useContext(
    LoginContext
  ) as LoginContextType;
  const client = useSuiClient();
  const { lockedSui, availableSui, loading, error } = useAppSelector(
    (state) => state.userBalances
  );

  // Shared dispatch to fetch both balances
  const fetchBalances = () => {
    if (address && client) {
      dispatch(fetchUserBalances({ address, client }));
    }
  };
  const lockSui = async () => {
    const toastId = toast.loading("Locking...");
    try {
      const txb = new Transaction();
      const [coin] = txb.splitCoins(txb.gas, [
        txb.pure.u64(amount * 1_000_000_000),
      ]);
      if (lockedSui > 0) {
        txb.moveCall({
          target: `${clientConfig.PACKAGE_ID}::lockup::add_to_locked_sui`,
          arguments: [coin, txb.object(clientConfig.APP_ID)],
        });
      } else {
        txb.moveCall({
          target: `${clientConfig.PACKAGE_ID}::lockup::lock_sui`,
          arguments: [txb.object(clientConfig.APP_ID), coin],
        });
      }

      const result = await signAndSubmitTransaction(txb, toastId);

      // Refetch both balances after successful lock
      fetchBalances();
      toast.success(`${amount} SUI locked`, { id: toastId });
    } catch (error) {
      toast.error("Error", { id: toastId });
      console.error(error);
    }
  };
  const statsContents = [
    {
      name: "Total Investments",
      color: "#F0E6F9",
      icon: "/assets/icons/money.svg",
      amount: `${lockedSui} SUI`,
    },

    {
      name: "Pending Transactions",
      color: "#FBE4E7",
      icon: "/assets/icons/arrow-red.svg",
      amount: "450 SUI",
    },
    {
      name: "Earnings",
      color: "#E4FBE9",
      icon: "/assets/icons/arrow-green.svg",
      amount: "1,250 SUI",
    },
    // { name: "Pending Loan", color: "#FBE4E7", icon: "/assets/icons/arrow-red.svg", amount: "1,250 SUI" },
  ];

  useEffect(() => {
    fetchBalances();
    const intervalId = setInterval(fetchBalances, 30000); // Poll every 30 seconds
    return () => clearInterval(intervalId);
  }, [address, client]);

  return (
    <div className="min-h-screen bg-blue-50 p-4 lg:p-10">
      <h5 className="text-xl sm:text-2xl font-semibold mb-8">Investments</h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {statsContents.map((item) => (
          <StatsCard key={item.name} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
        {/* Lock Tokens Form */}
        <div className="bg-white p-6 lg:p-10 rounded-[24px] shadow-md lg:col-span-1 h-max w-full">
          <h6 className="text-2xl font-medium mb-4 lg:mb-10">Lock Tokens</h6>
          <input
            type="number"
            placeholder="Amount to Lock"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="w-full p-3 text-lg border border-[#C4C4C4] h-16 placeholder:text-[#666666] rounded"
          />
          {/* <input
            type="text"
            placeholder="Duration"
            className="w-full p-3 text-lg mb-6 border border-[#C4C4C4] rounded"
          />
          <input
            type="text"
            placeholder="Interest Rate %"
            className="w-full p-3 text-lg mb-6 border border-[#C4C4C4] rounded"
          /> */}
          <AppButton
            title="Confirm Lock"
            style="w-full text-white font-bold mt-6 lg:mt-[64px]"
            action={lockSui}
          />
        </div>

        <div className="lg:col-span-2 w-full">
          {/* Borrower Bids List */}
          {/* <div className="bg-[#DFDFDF] p-6 rounded-2xl shadow-md mb-4 w-full">
            <div className="flex justify-between items-center mb-4">
              <h6 className="text-lg font-bold">Borrower Bids List</h6>
              <button className="text-[#000000] border border-[#FFFFFF] px-3 py-1 rounded flex items-center gap-2 text-sm">
                Filter By <Filter className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left">Borrower ID</th>
                    <th className="p-4 text-left">Requested Amount</th>
                    <th className="p-4 text-left">Interest Rate</th>
                    <th className="p-4 text-left">Duration</th>
                    <th className="p-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="border-b border-[#FFFFFF]">
                      <td className="p-4">12345678</td>
                      <td className="p-4">2,000 SUI</td>
                      <td className="p-4">5%</td>
                      <td className="p-4">3 months</td>
                      <td className="p-4">Completed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */}

          {/* Investment History */}
          {/* <div className="bg-[#FFFFFF] p-6 rounded-[24px] shadow-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h6 className="text-lg font-bold">Investment History</h6>
              <button className="border border-[#DFDFDF] px-3 py-1 rounded flex items-center gap-2 text-sm">
                Filter By <Filter className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left">Date</th>
                    <th className="p-4 text-left">Amount Locked</th>
                    <th className="p-4 text-left">Interest Rate</th>
                    <th className="p-4 text-left">Duration</th>
                    <th className="p-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(3)].map((_, i) => (
                    <tr key={i} className="border-b border-[#DFDFDF]">
                      <td className="p-4">05/04/2024</td>
                      <td className="p-4">2,000 SUI</td>
                      <td className="p-4">5%</td>
                      <td className="p-4">3 months</td>
                      <td className="p-4">Completed</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default IntermediaryPage;
