import IntermediaryRow from "@/components/ui/IntermediaryRow";
import WhiteBackground from "@/components/WhiteBackground";
import Image from "next/image";

// --------------------------------------------CONSTANTS
const intermediaries = [
  {
    name: "Nancy Tolu",
    maxAmount: 500000,
    averageTime: "30 minutes",
    fee: 1,
    paymentChannel: "Bank Transfer",
  },
];

const MarketPlace = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <section className='px-[15vw] flex flex-col min-h-[89.76svh] pt-[45px]'>
      <div className='mb-8'>
        <h5 className='font-semibold text-2xl mb-3'>Send Money</h5>
        <p className='text-light_ash'>
          Explore verified intermediaries ready to facilitate cross-border
          payments. Select the best match based on their ratings, capacity, and
          preferred rates to ensure a secure transaction.
        </p>
      </div>
      <div className='mb-6'>
        <WhiteBackground styles='rounded-[9px] relative flex items-center px-4 h-[52px] w-full'>
          <input
            placeholder='Search  by receivers, charges %, location, ...'
            className='w-full focus:outline-none  bg-transparent'
          />
          <Image
            src={"/assets/icons/search-normal.svg"}
            width={14.45}
            height={14.45}
            alt='search'
            className='absolute right-[16px]'
          />
        </WhiteBackground>
      </div>
      <WhiteBackground styles='h-[60vh] overflow-y-scroll p-6 rounded-[16px]'>
        <div className='grid border-b w-full mb-2 border-[#c4c4c4] pb-3 grid-cols-[1.5fr,1.5fr,0.8fr]'>
          <h6 className='font-medium text-xl'>Intermediaries</h6>
          <h6 className='font-medium text-xl flex items-center justify-center '>
            Payment Channel
          </h6>
          <h6 className='font-medium text-xl'></h6>
        </div>
        {new Array(10).fill(intermediaries[0]).map((item, index) => (
          <IntermediaryRow item={item} key={index.toString()} />
        ))}
      </WhiteBackground>
    </section>
  );
};

export default MarketPlace;
