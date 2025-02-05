import AppButton from "@/components/ui/AppButton";
import WhiteBackground from "@/components/WhiteBackground";
import Image from "next/image";
import { useState } from "react";

const TransactionRecived = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <WhiteBackground styles=" w-[90vw] sm:w-[55vw] p-5 sm:p-10   flex flex-col  gap-5 sm:gap-10 h-max">
      <div className="flex flex-col items-center gap-5 sm:gap-10">
        <div className="flex gap-6 flex-col items-center">
          <h6 className="font-medium text-2xl text-black">
            Transaction Received Successfully!
          </h6>
          <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] relative">
            <Image src={"assets/icons/success.svg"} alt="success" fill />
          </div>
          <p className="text-[#666666]  font-normal flex flex-col items-center text-sm sm:text-xl">
            <span className="text-center">
              The receiver has successfully received the local currency. Your
              10.7 SUI, held in escrow, has been released and credited to your
              wallet
            </span>
          </p>

          <div className="pt-16 flex gap-4 items-center flex-col">
            <Image
              src="/icons/document.svg"
              alt="Facebook"
              //   className="w-5 h-5"
              width={44}
              height={56}
            />
            <p className="text-[#0057DB] cursor-pointer text-xl font-normal">
              View Proof Of Payment
            </p>
          </div>
        </div>
      </div>

      <div className="flex pt-16 flex-col gap-4">
        <p className="text-[#666666] text-xl font-normal">
          Kindly confirm once the transfer has been completed
        </p>
        <div className="flex items-center mb-4 gap-[10px]">
          <input
            type="checkbox"
            onChange={() => setDisabled(!disabled)}
            className={` ${
              disabled && "border border-[#666666]"
            } appearance-none w-6 h-6 rounded-sm bg-white    checked:bg-blue-500 transition-all cursor-pointer`}
          />

          <p className="text-[#666666] text-lg font-normal">
            Click once transfer has been made successfully
          </p>
        </div>
      </div>
      <div className="w-full">
        <button
          className={`${
            disabled && "bg-[#C4C4C4] text-center "
          } w-full py-4 px-6 rounded-[8px] text-white bg-[#0057DB]`}
        >
          Confirm Payment Sent
        </button>
        <button
          onClick={() => console.log("This is it")}
          className={`${
            disabled && "text-[#C4C4C4]"
          } w-full font-bold hover:scale-[.98] duration-300 h-[53px] borde mt-2 rounded-[8px] border-appBlue text-appBlue`}
        >
          Report an issue
        </button>
      </div>
    </WhiteBackground>
  );
};
export default TransactionRecived;
