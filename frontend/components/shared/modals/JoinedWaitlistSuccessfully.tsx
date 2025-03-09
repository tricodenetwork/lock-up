import AppButton from "@/components/ui/AppButton";
import Image from "next/image";

const JoinedWaitlistSuccessfully = ({
  setSuccess,
}: {
  setSuccess: (e: boolean) => void;
}) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className="w-[360px] lg:w-[480px] lg:h-[400px] flex  gap-2 flex-col justify-center py-[66px] items-center rounded-xl">
      <div className="w-[104px] h-[104px] relative">
        <Image src={"/icons/success.svg"} fill alt="congrats" />
      </div>
      <h4 className="font-semibold text-[#0057DB] text-2xl md:text-3xl">
        Waitlist joined successfully
      </h4>
      <p className="text-[#475467] max-w-[70%] text-center mt-3 mb-8">
        You have successfully joined the waitlist
      </p>

      <AppButton
        title="Back to Homepage"
        style="w-[290px] lg:w-[360px] text-white font-semibold"
        action={() => setSuccess(false)}
      />
    </div>
  );
};
export default JoinedWaitlistSuccessfully;
