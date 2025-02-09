"use client";
import AppButton from "@/components/ui/AppButton";
import WhiteBackground from "@/components/WhiteBackground";
import Image from "next/image";
import { useState } from "react";

const AcceptTask = () => {
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
      <WhiteBackground styles="w-full mt-6 rounded-[16px] p-6">
        <div className="border-border border-b pb-6 ">
          <h6 className="font-medium text-xl text-black mb-3">
            Sender's Details
          </h6>
          <div className="grid gap-y-1 grid-cols-[2fr,4fr]">
            <p className="text-[#757575] center-all text-xl">Sender's Name:</p>
            <p className="text-[#1b1b1b] font-semibold text-2xl">
              John Doe (Nigeria)
            </p>
            <p className="text-[#757575] center-all text-xl">Amount:</p>
            <p className="text-[#1b1b1b] font-semibold text-2xl">#110,000</p>
            <p className="text-[#757575]  center-all text-xl">Transfer Type:</p>
            <p className="text-[#1b1b1b]  font-semibold text-2xl">
              Bank Transfer
            </p>
          </div>
        </div>
        <div className="border-border border-b py-6 ">
          <div className="flex flex-col gap-11">
            <AppButton
              title="Accept Task"
              style=" w-full bg-appBlue  my-ayto "
              action={() => console.log("he")}
            />
            <button className="w-full border-[2px] font-bold border-[#0057DB] text-[#C71D32] h-[53px] p-4 rounded-[8px]">
              Reject task
            </button>
          </div>
        </div>
        <div className="pt-6">
          <span className="font-medium">Transaction History</span>
          <div className="grid gap-y-1 grid-cols-[2fr,4fr]">
            <p className="text-[#757575] center-all text-xl">Step 1:</p>
            <p className="text-[#1b1b1b] font-semibold text-[18px]">
              Local currency transfer request.
            </p>
            <p className="text-[#757575] center-all text-xl">Step 2:</p>
            <p className="text-[#1b1b1b] font-semibold text-[18px]">
              SUI Locked
            </p>
          </div>
        </div>
      </WhiteBackground>
    </section>
  );
};
export default AcceptTask;
