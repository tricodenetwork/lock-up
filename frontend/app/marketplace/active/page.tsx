"use client";
import IntermediaryRow from "@/components/ui/IntermediaryRow";
import SelectComponent from "@/components/ui/SelectComponent";
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

const Active = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <section className="px-[5vw] sm:px-[15vw] flex flex-col min-h-[89.76svh] py-[45px]">
      <div className="mb-8">
        <h5 className="font-semibold text-2xl mb-3">Send Money</h5>
        <p className="text-light_ash sm:w-[57%]">
          Explore verified intermediaries ready to facilitate cross-border
          payments. Select the best match based on their ratings, capacity, and
          preferred rates to ensure a secure transaction.
        </p>
      </div>
      <div className="mb-6">
        <WhiteBackground styles="rounded-[12px] gap-4 sm:gap-10 relative flex flex-col sm:flex-row items-center px-6 py-8 sm:p-5  w-full">
          <SelectComponent
            labelStyles="block text-sm font-medium text-header_black mb-[10px]"
            zIndex={50}
            style="w-full lg:w-[204px]"
            onChange={() => console.log("")}
            items={[
              { value: "Bank Transfer", name: "Bank Transfer" },
              { value: "Crypto Currency", name: "Crypto Currency" },
              { value: "Paypal", name: "Paypal" },
            ]}
            placeholder="Select"
            countries={false}
            label="Filter by Payment Channel"
          />
          <SelectComponent
            labelStyles="block text-sm font-medium text-header_black mb-[10px]"
            zIndex={40}
            style="w-full lg:w-[204px]"
            onChange={() => console.log("")}
            items={[
              { value: "1% - 2%", name: "1% - 2%" },
              { value: "3% - 5%", name: "3% - 5%" },
              { value: "6% - 7%", name: "6% - 7%" },
            ]}
            placeholder="Select"
            countries={false}
            label="Filter by Charge"
          />
          <SelectComponent
            labelStyles="block text-sm font-medium text-header_black mb-[10px]"
            zIndex={30}
            style="w-full lg:w-[204px]"
            onChange={() => console.log("")}
            items={[
              { value: "1 - 10 minutes", name: "1 - 10 minutes" },
              { value: "11 - 20 minutes", name: "11 - 20 minutes" },
              { value: "21 - 30 minutes", name: "21 - 30 minutes" },
            ]}
            placeholder="Select"
            countries={false}
            label="Filter by Processing Time"
          />
        </WhiteBackground>
      </div>
      <WhiteBackground styles="h-[60vh] overflow-y-scroll p-6 rounded-[16px]">
        <div className="hidden lg:grid border-b w-full mb-2 border-[#c4c4c4] pb-3 grid-cols-[1.5fr,1.5fr,0.8fr]">
          <h6 className="font-medium text-xl">Intermediaries</h6>
          <h6 className="font-medium text-xl flex items-center justify-center ">
            Payment Channel
          </h6>
          <h6 className="font-medium text-xl"></h6>
        </div>
        {new Array(10).fill(intermediaries[0]).map((item, index) => (
          <IntermediaryRow item={item} key={index.toString()} />
        ))}
      </WhiteBackground>
    </section>
  );
};

export default Active;
