"use client";
import AppButton from "@/components/ui/AppButton";
import WhiteBackground from "@/components/WhiteBackground";
import useCrossBorderPayment from "@/hooks/useCrossBorderPayment";
import Image from "next/image";
import { countries, Country } from "country-data";

const TransactionSuccessful = ({ id }: { id: string }) => {
  // --------------------------------------------VARIABLES
  const { payment } = useCrossBorderPayment(id);
  const currency = countries.all.filter(
    (country) => country.alpha3 == payment?.in?.currency
  )[0]?.currencies[0];

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <WhiteBackground styles=" w-[90vw] sm:w-[55vw] p-5 sm:p-10 bord  flex flex-col items-center gap-5 sm:gap-10 h-max">
      <div className="flex flex-col items-center gap-5 sm:gap-10">
        <div className="flex gap-6 flex-col items-center">
          <h6 className="font-medium text-2xl text-black">
            Transaction Successful
          </h6>
          <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] relative">
            <Image src={"assets/icons/success.svg"} alt="success" fill />
          </div>
          <p className="text-[#666666] flex flex-col items-center text-sm sm:text-xl">
            <span className="text-center">
              {`You have sent  ${currency ?? "#"}${
                payment?.in?.amount_in_fiat ?? "110,000"
              } to the Intermediary (Nancy Tolu).`}
            </span>
            <span className="text-center">
              The intermediary will complete the local currency transfer within
              the estimated time shortly
            </span>
          </p>
        </div>
        <p className="font-semibold text-[#333333] text-xs sm:text-base italic flex flex-col items-center  text-center">
          <span>
            You will be notified once the receiver confirms the local currency
            transfer.
          </span>
          <span className="flex items-center">
            If there are any issues, contact{" "}
            <span className="text-appBlue ml-1"> support</span>
          </span>
        </p>
      </div>
      <div className="w-full">
        <AppButton
          href="/marketplace"
          title="View Transactions"
          style="w-full text-white font-bold"
        />
        <button
          onClick={() => console.log("This is it")}
          className="w-full font-bold hover:scale-[.98] duration-300 h-[53px] borde mt-2 rounded-[8px] border-appBlue text-appBlue"
        >
          Return to P2P Marketplace
        </button>
      </div>
    </WhiteBackground>
  );
};
export default TransactionSuccessful;
