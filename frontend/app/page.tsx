import Landingpage from "@/components/shared/home/Home";
import AppButton from "@/components/ui/AppButton";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className='bg-white flex flex-col min-h-screen'>
      <div className='flex justify-between items-center h-[88px] w-full px-12 border-b border-[#DCDCDC]'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <Link href='/'>
            <div className='relative w-[125px] h-[21.54px]'>
              <Image src={"/icons/logo.svg"} fill alt='logo' />
            </div>
          </Link>
        </div>
        <AppButton
          href='/'
          style='bg-appBlack  hover:opacity-80 rounded-[12px] w-[154px] h-[53px]'
          title='Connect wallet'
        />
      </div>
      <section className='flex justify-center flex-1 flex-col mx-auto items-center'>
        <div className='flex flex-col items-center'>
          <p className='font-bold flex flex-wrap items-center text-[54px] text-appBlack'>
            Decentralized <span className='text-suiBlue mx-3'> P2P </span>{" "}
            platform
          </p>
          <div className='flex relative bottom-6 items-center'>
            <p className='font-bold text-[54px] text-appBlack'>on</p>
            {/* <Image src={"/icons/sui.svg"} width={54} height={54} alt='sui' /> */}
            <span className='flex  mx-3 font-bold text-[52px] w-max items-center text-suiBlue'>
              <Image src={"/icons/sui.svg"} width={54} height={54} alt='sui' />
              SUI
            </span>
            <p className='font-bold text-[54px] text-appBlack'>blockchain</p>
          </div>
        </div>
        <p className='text-[20px] text-[#666666] font-medium max-w-[1003px] text-center'>
          Exchange SUI for local currencies and make cross-border payments
          effortlessly. Connect with trusted users globally, negotiate exchange
          rates, and complete transactions securely in just a few steps
        </p>
        <div className='w-[615px] mt-[10vh] mx-auto h-[359px] relative'>
          <Image src={"/assets/images/macbook.png"} fill alt='mac' />
        </div>
      </section>
    </div>
  );
};

export default Page;
