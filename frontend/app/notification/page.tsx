"use client";
import AcceptTask from "@/components/shared/modals/AcceptTask";
import TransactionSubmitted from "@/components/shared/modals/TransactionSubmitted";
import TransactionRecived from "@/components/shared/modals/TransactionRecieved";
import NotificationItem from "@/components/NotificationItem";
import AppButton from "@/components/ui/AppButton";
import WhiteBackground from "@/components/WhiteBackground";
import Image from "next/image";
import { useState } from "react";
import ConfirmPaymentSent from "@/components/shared/modals/ConfirmPaymentSent";

const Notification = () => {
  // --------------------------------------------VARIABLES
  const [disabled, setDisabled] = useState(true);

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <section className="px-[15vw] flex flex-col min-h-[89.76svh] pt-[45px]">
      <div>
        <h6 className="text-[#1b1b1b] font-semibold text-2xl">Notification</h6>
        <div className="flex items-center justify-between">
          <p className="text-xl text-black font-medium">Transaction Overview</p>
          <div className="flex items-center">
            <p className="text-[#757575] text-sm font-medium">
              Transaction Status:
            </p>
            <span className="bg-[#FFF3E0] ml-2 px-3 py-1 text-[#C77900]">
              Ongoing
            </span>
          </div>
          <div className="flex items-center">
            <p className="text-[#757575] text-sm font-medium">
              Transaction Date:
            </p>
            <span className="text-[#1b1b1b] ml-2">05/04/2024</span>
          </div>
        </div>
      </div>
      <ConfirmPaymentSent />
    </section>
  );
};
export default Notification;
