"use client";
import { motion } from "framer-motion";
import AppButton from "@/components/ui/AppButton";
import Image from "next/image";
import Link from "next/link";
import ProfilePopover from "@/components/ProfilePopover";

const Page = () => {
  return (
    <div className='bg-white flex relative bord  flex-col items-center justify-center min-h-screen pb-8'>
      <div className='flex justify-between items-center h-[88px] w-full px-4 sm:px-8 lg:px-12 border-b border-[#DCDCDC]'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <Link href='/'>
            <div className='relative w-[123px] sm:w-[125px] h-[21.54px]'>
              <Image src={"/icons/logo.svg"} fill alt='logo' />
            </div>
          </Link>
        </div>
        {/* <AppButton
          href='/'
          style='bg-appBlack  hover:opacity-80 text-sm rounded-[12px] w-[154px] h-[53px]'
          title='Connect wallet'
        /> */}
        <ProfilePopover />
      </div>
      <section className='flex justify-center p-4  sm:pt-12 flex-1 gap-8 flex-col mx-auto items-center'>
        {/* <div> */}
        <div className='flex flex-col items-center'>
          <p className='font-bold flex flex-wrap items-center text-2xl sm:text-5xl lg:text-6xl text-appBlack'>
            A Decentralized{" "}
            <motion.span
              className='text-suiBlue mx-3'
              animate={{ rotate: [0, 0, 0, -5, -5, -5, 0, 0, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "linear",
              }}
            >
              P2P
            </motion.span>{" "}
            platform
          </p>
          <div className='flex relative  sm:mt-2    items-center'>
            <p className='font-bold text-2xl sm:text-5xl lg:text-6xl text-appBlack'>
              on the
            </p>
            <motion.span
              className='flex mx-3 font-bold text-2xl sm:text-5xl lg:text-6xl w-max items-center text-suiBlue'
              animate={{ rotate: [2, -2], scale: [0.95, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "linear",
              }}
            >
              <div className=' w-[24px] h-[24px] relative sm:w-[54px] sm:h-[54px]'>
                <Image fill src={"/icons/sui.svg"} alt='sui' />
              </div>
              SUI
            </motion.span>
            <p className='font-bold text-2xl sm:text-5xl lg:text-6xl text-appBlack'>
              blockchain
            </p>
          </div>
        </div>
        <p className=' sm:text-lg text-[#666666] font-medium max-w-[800px] text-center'>
          Swap stables for local currencies, connect with trusted users, and
          securely complete transactions worldwide—fast and hassle-free.
        </p>
        {/* </div> */}
        <div className=' w-[330px] h-[230px] sm:w-[550px] mt-8 flex items-center mx-auto hsm:-[324px] relative'>
          <div className='w-[20vw] h-[20vw] absolute backdrop-blur-2xl blur-3xl  rounded-full bg-[#0057DB] bg-opacity-[0.25] lg:bg-opacity-5 ' />

          <Image src={"/assets/images/macbook.png"} fill alt='mac' />
        </div>
      </section>
    </div>
  );
};

export default Page;
