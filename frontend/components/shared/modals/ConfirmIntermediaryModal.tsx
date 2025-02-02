import AppButton from "@/components/ui/AppButton";
import WhiteBackground from "@/components/WhiteBackground";
import { Intermediary } from "@/types/Intermediary";
import Image from "next/image";

const ConfirmIntermediaryModal = ({
  close,
  item,
}: {
  close: (e: boolean) => void;
  item: Intermediary;
}) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <WhiteBackground styles='p-10 w-[90vw] lg:w-[797px] h-max'>
      <div>
        <div className='mb-2 sm:mb-4'>
          <h6 className='text-xl sm:text-2xl mb-2 text-black font-medium'>
            Confirm Intermediary Selection
          </h6>
          <p className='text-sm sm:text-lg text-[#757575]'>
            Review the intermediary details before proceeding with your
            transaction.
          </p>
        </div>
        <div className='grid gap-y-3 grid-cols-[1fr,1.3fr]'>
          <p className='text-[#757575] text-base sm:text-xl'>
            Intermediary's Name:
          </p>
          <p className='text-[#1b1b1b] font-semibold text-lg sm:text-2xl'>
            {item.name}
          </p>
          <p className='text-[#757575] text-base sm:text-xl'>Ratings</p>
          <p className='text-[#1b1b1b] flex items-center font-semibold text-lg sm:text-2xl'>
            4.8/5.0{" "}
            <Image
              src={"assets/icons/star.svg"}
              width={24}
              height={24}
              alt='stsr'
            />
          </p>
          <p className='text-[#757575] text-base sm:text-xl'>Charge Rate:</p>
          <p className='text-[#1b1b1b] font-semibold text-lg sm:text-2xl'>
            0.7 SUI (₦1,400)
          </p>
          <p className='text-[#757575] text-base sm:text-xl'>
            Maximum Transaction Capacity:
          </p>
          <p className='text-[#1b1b1b] font-semibold text-lg sm:text-2xl'>{`#${item.maxAmount.toLocaleString()}`}</p>
          <p className='text-[#757575] center-all text-xl'>Bank Details:</p>
          <div className='grid gap-y-1 grid-cols-2'>
            <p className='text-[#1b1b1b] font-bold text-lg sm:text-2xl'>
              Bank Name:
            </p>
            <p className='text-[#757575] center-all text-xl'>
              First Bank Nigeria
            </p>
            <p className='text-[#1b1b1b] font-bold text-lg sm:text-2xl'>
              Account Name:
            </p>
            <p className='text-[#757575] center-all text-xl'>Nancy Tolu</p>
            <p className='text-[#1b1b1b]  font-bold text-lg sm:text-2xl'>
              Account Number:
            </p>
            <p className='text-[#757575]  center-all text-xl'>0767656434</p>
          </div>
        </div>
      </div>
      <div className='mt-4 sm:mt-16'>
        <div className='flex items-center mb-4 gap-4'>
          <input type='checkbox' className='text-appBlue' />
          <p className='text-[#666666] text-xs sm:text-xl'>
            Once confirmed, you will review the transaction summary in the next
            step
          </p>
        </div>
        <AppButton
          href='/marketplace'
          title='Proceed to Send Money'
          style='w-full'
        />
        <button
          onClick={() => close(false)}
          className='w-full hover:scale-[.98] duration-300 h-[53px] border mt-2 rounded-[8px] border-appBlue text-appBlue'
        >
          Cancel
        </button>
        {/* <AppButton
          href='/'
          title='Cancel'
          style='w-full bg-transparent mt-2 text-appBlue'
        /> */}
      </div>
    </WhiteBackground>
  );
};

export default ConfirmIntermediaryModal;
