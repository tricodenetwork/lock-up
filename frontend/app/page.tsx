"use client";
import AppButton from "@/components/ui/AppButton";
import Image from "next/image";
import Link from "next/link";
import ProfilePopover from "@/components/ProfilePopover";
import { useState } from "react";
import ModalComponent from "@/components/shared/modals/ModalComponent";
import JoinWaitlist from "@/components/shared/modals/JoinWaitlist";
import JoinedWaitlistSuccessfully from "@/components/shared/modals/JoinedWaitlistSuccessfully";

const Page = () => {
  const [join, setJoin] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <div className="bg-white flex relative bord  flex-col items-center justify-center min-h-screen pb-8">
      {join && (
        <ModalComponent
          isModalOpen={join}
          setIsModalOpen={setJoin}
          Content={<JoinWaitlist setJoined={setJoin} setSuccess={setSuccess} />}
        />
      )}
      {success && (
        <ModalComponent
          isModalOpen={success}
          setIsModalOpen={setSuccess}
          Content={<JoinedWaitlistSuccessfully setSuccess={setSuccess} />}
        />
      )}
      <div className="flex justify-between items-center h-[88px] w-full px-4 sm:px-8 lg:px-12 border-b border-[#DCDCDC]">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-[123px] sm:w-[125px] h-[21.54px]">
              <Image src={"/icons/logo.svg"} fill alt="logo" />
            </div>
          </Link>
        </div>
        {/* <AppButton
          href='/'
          style='bg-appBlack  hover:opacity-80 text-sm rounded-[12px] w-[154px] h-[53px]'
          title='Connect wallet'
        /> */}
        <ProfilePopover />
        {/* <div className="hidden md:flex items-ceter gap-6">
          <button
            onClick={() => setJoin(true)}
            className="w-[200px] active:scale-95 duration-100 bg-appBlack text-white font-bold text-sm h-[53px] rounded-xl"
          >
            Join Waitlist
          </button>
          <button className="w-[200px] active:scale-95 duration-100 border-black border text-appBlack font-bold text-sm h-[53px] rounded-xl">
            Download Whitepaper
          </button>
        </div> */}
      </div>
      <section className="flex  md:justify-center p-4 pt-12 sm:pt-12 flex-1 gap-8 flex-col mx-auto items-center">
        {/* <div> */}
        <h1
          // style={{ lineHeight: "64px" }}
          className="font-bold max-w-[690px] lg:leading-[64px] lg:tracking-[-4px] text-center text-3xl leading-none sm:text-5xl lg:text-[54px] text-appBlack"
        >
          Revolutionalizing Cross-Border Payments with Blockchain
        </h1>
        <p className="text-sm sm:text-lg text-[#666666] font-medium max-w-[800px] text-center">
          Harness the power of blockchain to enable seamless, secure, and
          cost-effective international transactions, eliminating delays and
          reducing reliance on intermediaries for a more efficient global
          payment system.
        </p>
        <div className="flex-row-reverse flex items-center gap-6">
          <button
            onClick={() => setJoin(true)}
            className="w-[150px] lg:w-[200px] active:scale-95 duration-100 bg-appBlack text-white font-bold text-xs lg:text-sm h-[53px] rounded-xl"
          >
            Join Waitlist
          </button>
          <button className="w-[150px] lg:w-[200px] active:scale-95 duration-100 border-black border text-appBlack font-bold text-xs lg:text-sm h-[53px] rounded-xl">
            Download Whitepaper
          </button>
        </div>
        {/* </div> */}
        <div className=" w-[330px] h-[230px] sm:w-[550px] mt-8 flex items-center mx-auto hsm:-[324px] relative">
          <div className="w-[20vw] h-[20vw] absolute backdrop-blur-2xl blur-3xl  rounded-full bg-[#0057DB] bg-opacity-[0.25] lg:bg-opacity-5 " />

          <Image src={"/assets/images/macbook.png"} fill alt="mac" />
        </div>
      </section>
    </div>
  );
};

export default Page;
