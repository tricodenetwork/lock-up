import WhiteBackground from "@/components/WhiteBackground";
import Image from "next/image";
import React from "react";
import { Lexend } from "next/font/google";
import TransactionNotification from "@/components/TransactionNotification";
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

const Box = ({
  src,
  title,
  desc,
}: {
  src: string;
  title: string;
  desc: string;
}) => {
  return (
    <WhiteBackground styles='flex flex-col gap-2 w-[200px] bg-opacity-40 rounded-[4px]  shadow-[_0px_0px_20px] shadow-black/5 h-[129px] flex flex-col px-[12px] py-[15px] '>
      <div className='w-[36px] h-[36px] rounded-[4px] overflow-hidden bg-white flex items-center justify-center'>
        <div className='w-[20px] h-[20px] relative'>
          <Image
            src={`/icons/${src}.svg`}
            alt={src}
            fill
            className='object-contain'
          />
        </div>
      </div>
      <h5 className='text-header_black font-medium text-sm'>{title}</h5>
      <p className='text-header_black opacity-50 text-xs'>{desc}</p>
    </WhiteBackground>
  );
};

const Page = () => {
  return (
    <div className='flex flex-col relative flex-1 justify-around'>
      <div className='absolute w-screen flex justify-center top-10 self-center'>
        <TransactionNotification />
      </div>
      <section className='flex flex-col gap-[36px]  items-center '>
        <div className='mx-auto max-w-[581px]'>
          <h3 className='font-semibold text-[42px] text-center leading-tight  text-[#212529]'>
            The fast and trusted way to send money online
          </h3>
          <p className='text-sm opacity-50  mt-3 text-center mx-auto'>
            Whether you need to send money to friends down the street or family
            across the globe, Eastern Union gets your funds there quickly and
            reliably.
          </p>
        </div>
        <div style={lexend.style} className='flex mx-auto items-center gap-4'>
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
      <section className='gap-[32px]  mx-auto  w-max flex flex-col'>
        {["Send Money", "Receive Money"].map((item) => {
          return (
            <WhiteBackground
              key={item}
              styles='w-[1004px] h-[111px] hover:scale-105 hover:border border-header_black/50  duration-100 cursor-pointer rounded-[9px] flex items-center justify-center'
            >
              <p className='text-[#666666] text-sm'>{item}</p>
            </WhiteBackground>
          );
        })}
      </section>
    </div>
  );
};

export default Page;
