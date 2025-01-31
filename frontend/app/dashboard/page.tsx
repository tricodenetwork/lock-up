"use client";
import WhiteBackground from "@/components/WhiteBackground";
import Image from "next/image";
import React, { useState } from "react";
import { Lexend } from "next/font/google";
import TransactionNotification from "@/components/TransactionNotification";
import SendMoneyComponent from "@/components/SendMoneyComponent";
import { Box } from "@/components/ui/ValueBox";
import OutsideClickHandler from "react-outside-click-handler";
const lexend = Lexend({ subsets: ["latin", "latin-ext", "vietnamese"] });

const boxDetails = [
  {
    src: "fast",
    title: "Fast",
    desc: "Send money online to loved ones across the world.",
  },
  {
    src: "safe",
    title: "Safe",
    desc: "Feel secure knowing we have sent over a billion.",
  },
  {
    src: "great",
    title: "Great Value",
    desc: "Great rates, special offers, and no hidden fees.",
  },
];

const Page = () => {
  const [send, setSend] = useState(false);
  const [receive, setReceive] = useState(false);
  return (
    <div className='flex  flex-col px-4 min-h-[89.76svh] gap-8 py-8 relative flex-1 justify-around'>
      {/* <div className='absolute w-screen flex justify-center top-10 self-center'>
        <SendMoneyComponent />
      </div> */}
      {!send && !receive && (
        <section className='flex flex-col gap-[36px] overflow-hidden  items-center'>
          <div className='mx-auto max-w-[581px]'>
            <h3 className='font-semibold text-4xl sm:text-[42px] text-center leading-[1.1]  text-[#212529]'>
              The fast and trusted way to send money online
            </h3>
            {
              <p className='text-sm opacity-50  mt-6 sm:mt-3 text-center mx-auto'>
                Whether you need to send money to friends down the street or
                family across the globe, Eastern Union gets your funds there
                quickly and reliably.
              </p>
            }
          </div>
          <div
            style={lexend.style}
            className='sm:flex mx-auto hidden  items-center gap-4'
          >
            {boxDetails.map((item) => {
              return (
                <Box
                  key={item.title}
                  src={item.src}
                  desc={item.desc}
                  title={item.title}
                />
              );
            })}
          </div>
        </section>
      )}
      {!send && !receive && (
        <section className='gap-8  mx-auto  w-full lg:w-max flex flex-col'>
          {["Send Money", "Receive Money"].map((item) => {
            return (
              <WhiteBackground
                key={item}
                styles=' w-[95%] active:scale-95 duration-300 lg:w-[1004px] mx-auto h-[111px] hover:scale- hover:border border-header_black/25  duration-100 cursor-pointer rounded-[9px] flex items-center justify-center'
              >
                <button
                  onClick={() =>
                    item.includes("Send") ? setSend(true) : setReceive(true)
                  }
                  className='text-[#666666] flex-1 h-full text-sm'
                >
                  {item}
                </button>
              </WhiteBackground>
            );
          })}
        </section>
      )}
      {(send || receive) && (
        <OutsideClickHandler
          display='contents'
          onOutsideClick={() => {
            setReceive(false);
            setSend(false);
          }}
        >
          <SendMoneyComponent />
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Page;
