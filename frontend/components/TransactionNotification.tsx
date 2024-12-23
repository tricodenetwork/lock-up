"use client";
import Image from "next/image";
import React from "react";
import AppButton from "./ui/AppButton";

const TransactionNotification = ({
  header = "New Transaction Request",
  description = "You’ve received a new transaction request. The sender has sent 10.7SUI, and the equivalent of ₦102,000.  You are to transfer R100,000 to the receiver's bank account. Tap 'View Details' for more information.",
  inCurrency,
  inAmount,
  outCurrency,
  outAmount,
}: {
  header?: string;
  description?: string;
  inCurrency?: string;
  inAmount?: string;
  outCurrency?: string;
  outAmount?: string;
}) => {
  return (
    <div className='w-[80%]  px-[60px] relative flex flex-col  justify-center h-[124px] bg-[#E7E9F8] rounded-[8px] border-[#0F27BD] border-[1.5px]'>
      <Image
        src={"/icons/info.svg"}
        width={24}
        height={24}
        alt='info'
        className='absolute top-3 left-3'
      />
      <h6 className='text-[#252730] font-medium text-[20px]'>{header}</h6>
      <p className='text-[#252730] w-[80%] text-[16px]'>{description}</p>
      <AppButton
        title='View Details'
        style='absolute w-max bg-appBlue z-50 right-3 my-ayto '
        action={() => console.log("he")}
      />
    </div>
  );
};

export default TransactionNotification;
