import WhiteBackground from "@/components/WhiteBackground";
import Image from "next/image";

const TransactionSubmitted = () => {
  return (
    <WhiteBackground styles=" w-[90vw] sm:w-[55vw] p-5 sm:p-10 bord   flex flex-col items-center gap-5 sm:gap-10 h-max">
      <div className="flex flex-col items-center gap-5 sm:gap-10">
        <div className="flex gap-6 flex-col items-center">
          <h6 className="font-medium text-lg md:text-2xl text-black">
            Transaction Submitted Successfully!
          </h6>
          <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] relative">
            <Image src={"assets/icons/success.svg"} alt="success" fill />
          </div>
          <p className="text-[#666666] flex flex-col items-center text-sm sm:text-lg">
            <span className="text-center">
              John Doe (USA) has confirmed the local currency transfer.{" "}
            </span>
            <span className="text-center">
              Your 10.7SUI has been released from escrow and credited to your
              wallet.
            </span>
          </p>
        </div>
      </div>
    </WhiteBackground>
  );
};
export default TransactionSubmitted;
