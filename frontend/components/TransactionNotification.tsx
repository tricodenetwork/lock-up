"use client";
import Image from "next/image";
import React from "react";
import AppButton from "./ui/AppButton";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ translateY: -150 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.6 }}
      className='w-[82%]  mx-auto  absolute top-4  self-center flex py-[18px]  justify-between px-6 h-[124px] bg-[#E7E9F8] rounded-[8px] border-[#0F27BD] border-[1.5px]'
    >
      <Image
        src={"/icons/info.svg"}
        width={24}
        height={24}
        alt='info'
        className='w-6 h-6 mr-4'
      />
      <div className='flex flex-col justify-between w-[85%] '>
        <h6 className='text-[#252730] font-medium text-[20px]'>{header}</h6>
        <p className='text-[#252730] w-[100%] text-[16px]'>{description}</p>
      </div>
      <AppButton
        title='View Details'
        style='w-max bg-appBlue self-center h-[19px] z-50 my-ayto '
        action={() => console.log("he")}
      />
    </motion.div>
  );
};

export default TransactionNotification;
