// components/SendMoneyComponent.tsx
"use client";

import React, { useEffect, useState } from "react";
import WhiteBackground from "./WhiteBackground";
import { useFonts } from "@/hooks/useFonts";
import SelectComponent from "./ui/SelectComponent";
import { countries, Country } from "country-data";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SendMoneyComponent: React.FC = () => {
  const [sendersCountry, setSenderCountry] = useState<Country | null>(null);
  const [receiversCountry, setReceiverCountry] = useState<Country | null>(null);
  const [sendAmount, setSendAmount] = useState("");
  const [to, setTo] = useState(0);
  const [receiveCountryError, setReceiverCountryError] = useState(false);
  const [senderCountryError, setSenderCountryError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const { lexend } = useFonts();
  const router = useRouter();
  const fromSymb = sendersCountry?.currencies[0] ?? "";
  const toSymb = receiversCountry?.currencies[0] ?? "";

  const paymentMethods = [
    { value: "bank", name: "Bank Account" },
    { value: "card", name: "Credit/Debit Card" },
    { value: "BTC", name: "Wallet Address" },
  ];

  //-----------------------------------------------------------FUNCTIONS

  const setSender = (e: any) => {
    setSenderCountryError(false);
    setSenderCountry(e);
  };
  const setReceiver = (e: any) => {
    setReceiverCountryError(false);
    setReceiverCountry(e);
  };
  const setAmounts = (e: any) => {
    setAmountError(false);
    setSendAmount(e);
  };

  const handleSubmit = () => {
    if (!sendersCountry) {
      setSenderCountryError(true);
    }
    if (!receiversCountry) {
      setReceiverCountryError(true);
    }
    if (!sendAmount) {
      setAmountError(true);
    }

    if (senderCountryError || receiveCountryError || amountError) {
      console.log("fjs");
      return;
    }
    // window.location.href = "/marketplace";
    router.push("/marketplace");
  };

  //------------------------------------------------------------------USE EFFECTS

  useEffect(() => {
    if (toSymb) {
      const convert = async () => {
        try {
          const res = await axios.get(
            `/api/convert?from=${fromSymb}&to=${toSymb}`
          );
          setTo(res.data.message);
        } catch (error: any) {
          toast.error(error.response.data.message ?? "error converting");
        }
      };
      convert();
    }
  }, [toSymb]);

  return (
    <div className='flex w-full mx-auto sm:w-[468px] flex-col'>
      <div className='h-[24px] w-full mb-[10px] flex items-center justify-center gap-3 bg-[#FFFADB] rounded-sm'>
        <p>{`1 ${fromSymb} = ${to ?? ""} ${toSymb}*`}</p>
        <p className='text-xs underline'>Show fees</p>
      </div>
      <WhiteBackground
        styles={`${lexend.className} w-full  h-max  relative  rounded-lg shadow-sm p-[30px]`}
      >
        <h2 className='text-2xl text-start font-semibold text-[#212529] mb-5'>
          Send money online
        </h2>

        <div className='mb-5 relative'>
          <SelectComponent
            error={senderCountryError}
            style='z-50'
            label="Senders's country"
            onChange={setSender}
            items={countries.all as Country[]}
            placeholder='Select country'
            countries={!false}
          />
          {senderCountryError && (
            <p className='text-xs text-error mt-1'>
              Please select your country
            </p>
          )}
        </div>

        <div className='relative'>
          <SelectComponent
            error={receiveCountryError}
            style='z-40'
            label="Receiver's country"
            onChange={setReceiver}
            items={countries.all as Country[]}
            placeholder='Select country'
            countries={!false}
          />
          {receiveCountryError && (
            <p className='text-xs text-error mt-1'>
              Please select the receiver country
            </p>
          )}
        </div>
        <div className='flex flex-col'>
          <div className='flex gap-2  items-center mt-5 '>
            <div className=''>
              <label className='block text-sm font-medium text-header_black mb-2'>
                Send amount
              </label>
              <input
                type='text'
                value={sendAmount}
                placeholder='0.00'
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*\.?\d*$/.test(value)) {
                    setAmounts(value);
                  }
                }}
                className={`w-[188px] h-[50px] p-4 bg-[#fafafa] border ${
                  amountError ? "border-error" : "border-border"
                } rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <Image
              src={"/assets/icons/exchange.svg"}
              width={16.94}
              height={14}
              className='mt-6'
              alt='exchange'
            />

            <div className=''>
              <label className='block text-sm font-medium text-header_black mb-2'>
                Receive amount
              </label>
              <input
                type='text'
                placeholder='0.00'
                readOnly
                value={sendAmount ? (parseInt(sendAmount) * to).toFixed(0) : ""}
                className={`w-[188px] h-[50px] p-4 bg-[#fafafa] border ${
                  amountError ? "border-error" : "border-border"
                } rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>
          {amountError && (
            <p className='text-xs text-error mt-1'>
              Please select an amount to send
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className='w-full flex items-center justify-center h-[50px] gap-2 bg-[#FFDD00]  hover:bg-[#E3C500] text-appBlack font-semibold py-4 px-6 rounded-md mt-5'
        >
          Continue
          <Image
            className={`-rotate-90  relative top-[1px]`}
            src={"/assets/icons/arrow-down.svg"}
            width={10}
            height={17}
            alt='down'
          />
        </button>
      </WhiteBackground>
    </div>
  );
};

export default SendMoneyComponent;
