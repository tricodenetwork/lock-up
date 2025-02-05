"use client";
import TransactionRecived from "@/components/shared/modals/TransactionRecieved";
import AppButton from "@/components/ui/AppButton";
import WhiteBackground from "@/components/WhiteBackground";
import Image from "next/image";
import { useState } from "react";

const Notification = () => {
  // --------------------------------------------VARIABLES
  const [disabled, setDisabled] = useState(true);

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <section className="px-[15vw] flex flex-col min-h-[89.76svh] pt-[45px]">
        <div>
          <h6 className="text-[#1b1b1b] font-semibold text-2xl">
            Notification
          </h6>
          <div className="flex items-center justify-between">
            <p className="text-xl text-black font-medium">
              Transaction Overview
            </p>
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
              <p className="text-[#757575] center-all text-xl">
                Sender's Name:
              </p>
              <p className="text-[#1b1b1b] font-semibold text-2xl">
                John Doe (Nigeria)
              </p>
              <p className="text-[#757575] center-all text-xl">Amount:</p>
              <p className="text-[#1b1b1b] font-semibold text-2xl">#110,000</p>
              <p className="text-[#757575]  center-all text-xl">
                Transfer Type:
              </p>
              <p className="text-[#1b1b1b]  font-semibold text-2xl">
                Bank Transfer
              </p>
            </div>
          </div>
          <div className="border-border border-b py-6 ">
            <h6 className="font-medium text-xl text-black mb-3">
              Receiver's Details
            </h6>
            <div className="grid gap-y-1 grid-cols-[2fr,4fr]">
              <p className="text-[#757575] center-all text-xl">
                Sender's Name:
              </p>
              <p className="text-[#1b1b1b] font-semibold text-2xl">
                Nancy Tolu (Nigeria)
              </p>
              <p className="text-[#757575] center-all text-xl">
                Local Currency To Transfer:
              </p>
              <p className="text-[#1b1b1b] font-semibold text-2xl">#110,000</p>
              <p className="text-[#757575]  center-all text-xl">
                Bank Details:
              </p>
              <p className="text-[#1b1b1b]  font-semibold text-2xl">
                First Bank- 123456789
              </p>
              <p className="text-[#757575]  center-all text-xl">Country:</p>
              <p className="text-[#1b1b1b]  font-semibold text-2xl">Nigeria</p>
            </div>
          </div>
          <div className="w-full h-[200px] flex flex-col items-center justify-center">
            <Image
              src={"assets/icons/upload.svg"}
              width={64}
              height={64}
              alt="upload"
            />
            <p className="text-xl text-[#666666] mt-3">
              Upload proof of payment
            </p>
          </div>
          <div className="mt-16">
            <div className="flex items-center mb-4 gap-4">
              <input
                type="checkbox"
                onChange={() => setDisabled(!disabled)}
                className="text-appBlue"
              />
              <p className="text-[#666666] text-xl">
                Once confirmed, you will review the transaction summary in the
                next step
              </p>
            </div>
            <AppButton
              disabled={disabled}
              action={() => {}}
              title="Confirm Payment Sent"
              style="w-full disabled:bg-[#C4C4C4] bg-appBlue font-bold  disabled:text-white"
            />
            <button
              // onClick={() => {}}
              className="w-full font-bold hover:scale-[.98] duration-300 h-[53px] border mt-2 rounded-[8px] border-[#c4c4c4] text-[#c4c4c4]"
            >
              Report Issue
            </button>
            {/* <AppButton
          href='/'
          title='Cancel'
          style='w-full bg-transparent mt-2 text-appBlue'
        /> */}
          </div>
        </WhiteBackground>
      </section>
    </>
  );
};
export default Notification;
