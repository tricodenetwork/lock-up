"use client";

import { LoginContext } from "@/contexts/ZkLoginContext";
import useCrossBorderPayment from "@/hooks/useCrossBorderPayment";
import { CrossBorderPayment, Transaction } from "@/types/CrossBorderPayment";
import { LoginContextType } from "@/types/todo";
import Image from "next/image";

import React, { useContext, useState } from "react";

const TransactionHistory = () => {
  const [isIntermediary, setIsIntermediary] = useState(false);

  const { payments, transactions } = useCrossBorderPayment();

  console.log(payments);

  return (
    <div className="p-6 bg-white rounded-3xl   overflow-hidden border-none shadow-none">
      <div className="flex  flex-col  mb-6 sm:flex-row justify-between items-start sm:items-center gap-4 ">
        <h3 className="text-base  font-bold text-[#1B1B1B]">
          Transaction Details
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm text-[#1B1B1B]">Sender</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isIntermediary}
                onChange={() => setIsIntermediary(!isIntermediary)}
              />
              <div className="w-8 h-4 bg-gray-300 rounded-full peer-checked:bg-[#0057DB] transition-all relative">
                <div
                  className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all ${
                    isIntermediary ? "right-1" : "left-1"
                  }`}
                ></div>
              </div>
            </label>
            <span className="text-xs sm:text-sm text-[#1B1B1B]">
              Intermediary
            </span>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-3 py-1 border rounded-lg text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start">
          <span className="text-[#1B1B1B] text-xs font-bold">Filter By</span>
          <Image src="/icons/filter.svg" alt="Filter" width={12} height={12} />
        </button>
      </div>
      <div className="overflow-x-auto ">
        <table className="w-full">
          <thead>
            <tr className="border-b ">
              <th className="text-left py-3   text-xs text-[#1B1B1B] font-bold">
                Date
              </th>
              <th className="text-left py-3   text-xs text-[#1B1B1B] font-bold">
                Receiver&apos;s Name
              </th>
              <th className="text-left py-3   text-xs text-[#1B1B1B] font-bold">
                Sent Amount
              </th>
              <th className="text-left py-3   text-xs text-[#1B1B1B] font-bold">
                Received Amount
              </th>
              <th className="text-left py-3   text-xs text-[#1B1B1B] font-bold">
                Status
              </th>
              <th className="text-left py-3   text-xs text-[#1B1B1B] font-bold"></th>
            </tr>
          </thead>
          <tbody>
            {isIntermediary
              ? transactions?.reverse()?.map((item: Transaction, i) => (
                  <tr key={i.toString()} className="border-b">
                    <td className="py-3 text-xs ">
                      {new Date(
                        parseInt(
                          (item.finished ?? item.started) as unknown as string
                        )
                      ).toLocaleString()}
                    </td>
                    <td className="py-3 text-xs ">_____</td>
                    <td className="py-3 text-xs text-appBlue ">
                      {item.flag}{" "}
                      <span className="text-appBlack  text-[8px]">
                        {item.currency}
                      </span>{" "}
                      {item.amount_in_fiat}
                    </td>
                    <td className="py-3 text-xs text-appBlue ">
                      {item.flag}{" "}
                      <span className="text-appBlack  text-[8px]">
                        {item.currency}
                      </span>{" "}
                      {item.amount_in_fiat}
                    </td>
                    <td className="py-3 ">
                      <p
                        className={`px-2 py-2 rounded-full font-semibold w-[80px] text-center  text-xs ${
                          item.received
                            ? "bg-[#E6F6E5] text-[#2D6A4F]"
                            : "bg-[#FFF3E0] text-[#C77900]"
                        }`}
                      >
                        {item.received ? "Completed" : "Ongoing"}
                      </p>
                    </td>
                    <td className="py-3 flex justify-end">
                      <button>
                        <Image
                          src="assets/icons/more.svg"
                          alt="More"
                          width={16}
                          height={16}
                          className=""
                        />
                      </button>
                    </td>
                  </tr>
                ))
              : payments.reverse().map((item: CrossBorderPayment, i) => (
                  <tr key={i.toString()} className="border-b">
                    <td className="py-3 text-xs ">
                      {new Date(
                        parseInt(item.created as unknown as string)
                      ).toLocaleString()}
                    </td>
                    <td className="py-3 text-xs ">_____</td>
                    <td className="py-3 text-xs text-appBlue ">
                      {item.in.flag}{" "}
                      <span className="text-appBlack  text-[8px]">
                        {item.in.symbol}
                      </span>{" "}
                      {item.in.amount_in_fiat}
                    </td>
                    <td className="py-3 text-xs text-appBlue ">
                      {item.out.flag}{" "}
                      <span className="text-appBlack  text-[8px]">
                        {item.out.symbol}
                      </span>{" "}
                      {item.out.amount_in_fiat}
                    </td>
                    <td className="py-3 ">
                      <p
                        className={`px-2 py-2 rounded-full font-semibold w-[80px] text-center  text-xs ${
                          item.in.received && item.out.received
                            ? "bg-[#E6F6E5] text-[#2D6A4F]"
                            : "bg-[#FFF3E0] text-[#C77900]"
                        }`}
                      >
                        {item.in.received && item.out.received
                          ? "Completed"
                          : "Ongoing"}
                      </p>
                    </td>
                    <td className="py-3 flex justify-end">
                      <button>
                        <Image
                          src="assets/icons/more.svg"
                          alt="More"
                          width={16}
                          height={16}
                          className=""
                        />
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
