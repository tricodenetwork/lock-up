import AppButton from "@/components/ui/AppButton";
import WhiteBackground from "@/components/WhiteBackground";
import Image from "next/image";
import { useState } from "react";

const TransactionRecived = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <WhiteBackground styles=' w-[90vw] sm:w-[55vw] p-5 sm:p-10   flex flex-col  gap-5  h-max'>
      <div className='flex gap-6 flex-col items-center'>
        <h6 className='font-medium text-lg sm:text-2xl text-black'>
          Transaction Received Successfully!
        </h6>
        <div className='w-[80px] h-[80px] relative'>
          <Image src={"assets/icons/success.svg"} alt='success' fill />
        </div>
        <p className='text-[#666666]  font-normal flex flex-col items-center text-sm sm:text-lg'>
          <span className='text-center'>
            The receiver has successfully received the local currency. Your 10.7
            SUI, held in escrow, has been released and credited to your wallet
          </span>
        </p>

        <div className='pt-4 flex gap-4 items-center flex-col'>
          <Image
            src='/icons/document.svg'
            alt='Facebook'
            //   className="w-5 h-5"
            width={48}
            height={48}
          />
          <p className='text-[#0057DB] cursor-pointer text-sm sm:text-lg font-normal'>
            View Proof Of Payment
          </p>
        </div>
      </div>

      <div className='flex  pt-4 flex-col gap-4'>
        <p className='text-[#666666] text-sm sm:text-lg font-normal'>
          Kindly confirm once the transfer has been completed
        </p>
        <div className='flex items-center mb-4 gap-[10px]'>
          <input
            type='checkbox'
            onChange={() => setDisabled(!disabled)}
            className={` ${
              disabled && "border border-[#666666]"
            } appearance-none w-4 h-4 rounded-sm bg-white    checked:bg-blue-500 transition-all cursor-pointer`}
          />

          <p className='text-[#666666] text-xs sm:text-base font-normal'>
            Click once transfer has been made successfully
          </p>
        </div>
      </div>
      <div className='w-full'>
        <AppButton
          disabled={disabled}
          title='Confirm Payment Sent'
          style='font-bold w-full disabled:cursor-not-allowed disabled:bg-[#c4c4c4] text-white bg-appBlue'
          action={() => console.log("AppButton")}
        />
        <AppButton
          title='Report Issue'
          style='font-bold w-full mt-4 text-[#c4c4c4] bg-transparent'
          action={() => console.log("AppButton")}
        />
      </div>
    </WhiteBackground>
  );
};
export default TransactionRecived;
