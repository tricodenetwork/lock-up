"use client";
import React, { useState } from "react";
import Image from "next/image";
import SelectComponent from "@/components/SelectComponent";

export default function Home() {
  // State for payment channels
  const [selectedPayments, setSelectedPayments] = useState(["", "", "", ""]);
  const [suiWallet, setSuiWallet] = useState("");
  const [transferRate, setTransferRate] = useState("");

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex justify-center">
      <div className="max-w-5xl w-full space-y-6">
        <h2 className="text-lg font-bold text-left text-black">CHOOSE YOUR ROLE</h2>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
          {/* Intermediary 1 */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow">
            <Image src="/icons/logo.svg" width={100} height={100} alt="" />
            <h1 className="font-bold text-lg mt-2">Intermediary 1</h1>
            <p className="text-gray-600 text-sm mt-2">
              As an Intermediary here, you will be tasked with making SUI available in your wallet. This SUI will be Locked up to facilitate transactions and you will be paid for it with interest.
            </p>
          </div>

          {/* Intermediary 2 */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow order-3 md:order-none">
            <Image src="/icons/logo.svg" width={100} height={100} alt="" />
            <h1 className="font-bold text-lg mt-2">Intermediary 2</h1>
            <p className="text-gray-600 text-sm mt-2">
              As an Intermediary here, you will be tasked with making SUI available in your wallet. This SUI will be Locked up to facilitate transactions and you will be paid for it with interest.
            </p>
          </div>

          {/* Payment Channel */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow order-1 md:order-none">
            <h3 className="font-semibold text-lg">Payment Channel</h3>
            <div className="space-y-4 mt-4">
              {/* Payment Channel Selections */}
              {selectedPayments.map((payment, index) => (
                <div key={index}>
                  <SelectComponent
                    label={`Set-up Payment Channel ${index + 1}`}
                    value={payment}
                    onChange={(e) => {
                      const updatedPayments = [...selectedPayments];
                      updatedPayments[index] = e.target.value;
                      setSelectedPayments(updatedPayments);
                    }}
                    options={[
                      { value: "bank_account", label: "Bank Account" },
                      { value: "crypto_wallet", label: "Crypto Wallet" },
                    ]}
                  />
                </div>
              ))}

              {/* SUI Wallet Address */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  SUI Wallet Address
                </label>
                <input
                  type="text"
                  className="w-full p-3 text-sm bg-[#FAFAFA] border border-gray-[#EBECE6] rounded-md text-header_black font-light focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1234-1234-1234-1234"
                  value={suiWallet}
                  onChange={(e) => setSuiWallet(e.target.value)}
                />
              </div>

              {/* Transfer Rate % */}
              <SelectComponent
                label="Transfer Rate %"
                value={transferRate}
                onChange={(e) => setTransferRate(e.target.value)}
                options={[
                  { value: "1", label: "1%" },
                  { value: "2", label: "2%" },
                  { value: "3", label: "3%" },
                  { value: "4", label: "4%" },
                  { value: "5", label: "5%" },
                  { value: "10", label: "10%" },
                  { value: "15", label: "15%" },
                  { value: "20", label: "20%" },
                ]}
              />
            </div>

            <button className="mt-4 w-full bg-[#0057DB] text-white p-2 rounded hover:bg-blue-700">
              Confirm
            </button>
          </div>

          {/* Bank Account */}
          <div className="w-full md:col-span-1 bg-white p-6 rounded-lg shadow order-4 md:order-none self-start">
            <h3 className="font-semibold text-lg">Bank Account</h3>
            <div className="space-y-4 mt-4">
              {["Bank Name", "Account Name", "Account Number", "Bank Location"].map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    {field}
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 text-sm bg-[#FAFAFA] border border-gray-[#EBECE6] rounded-md text-header_black font-light focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter ${field}`}
                  />
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-[#0057DB] text-white p-2 rounded hover:bg-blue-700">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
