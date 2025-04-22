"use client";
import Image from "next/image";
import SelectComponent from "./ui/SelectComponent";
import { countries, Country } from "country-data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PaymentDetails = ({ item, remove }: { item: string; remove: any }) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");
  const [accntName, setAccntName] = useState<string>("");
  const [accntNum, setAccntNum] = useState<string>("");
  const [modeOfPayment, setModeOfPayment] = useState<string>("");
  const [showDetails, setShowDetails] = useState(false);

  const setMode = (params: any) => {
    setModeOfPayment(params.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-appBlack2 font-semibold text-base leading-5">
          Item {item}
        </p>
        <button onClick={() => setShowDetails(!showDetails)}>
          <Image
            className={`duration-200 ${
              showDetails ? "rotate-180 z-20" : "rotate-0"
            }`}
            src={"/assets/icons/arrow-down.svg"}
            width={12}
            height={12}
            alt="down"
          />
        </button>
      </div>
      <div className="mt-2 flex gap-5 items-center w-full">
        <SelectComponent
          style="z-[100] "
          labelStyles="block text-sm font-medium text-header_black mb-[10px]"
          label=""
          onChange={setCountry}
          items={countries.all as Country[]}
          placeholder="Select Currency"
          countries={!false}
        />
        <SelectComponent
          style="z-[100] "
          onChange={setAmount}
          labelStyles="block text-sm font-medium text-header_black mb-[10px]"
          items={[
            { value: "100 - 1000", name: "100 - 1000" },
            { value: "1000 - 10000", name: "1000 - 10000" },
            { value: "10000 - 100000", name: "10000 - 100000" },
            { value: "100000 - 500000", name: "100000 - 500000" },
          ]}
          placeholder="Select Amount"
          countries={false}
          label=""
        />
        <SelectComponent
          style="z-[100]"
          onChange={setMode}
          labelStyles="block text-sm font-medium text-header_black mb-[10px]"
          items={[
            { value: "Bank Transfer", name: "Bank Transfer" },
            { value: "Paypal", name: "Paypal" },
            { value: "Google Pay", name: "Google Pay" },
            { value: "Apple Pay", name: "Apple Pay" },
          ]}
          placeholder="Mode of Transaction"
          countries={false}
          label=""
        />
      </div>

      <AnimatePresence>
        {/* {showDetails && (
          <motion.div
            className="mt-4 flex flex-col gap-5"
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            > */}
        {modeOfPayment === "Bank Transfer" ? (
          <motion.div
            animate={{ height: showDetails ? "300px" : "0", opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={`border-[#EBECE6] overflow-hidden ${
              showDetails ? "h" : "h-"
            }  flex flex-col items-center justify-center rounded-[8px] border mt-2.5 w-full`}
          >
            <div
              className={`flex w-full ${
                showDetails ? "translate-y-0" : "-translate-y-full"
              } flex-col gap-[19px] duration-300 py-4 px-5`}
            >
              <SelectComponent
                style="z-50 h-[44px] w-[100%]"
                labelStyles="block text-[#212529] text-sm font-bold mb-2"
                label="Bank Name"
                onChange={setBankName}
                items={countries.all as Country[]}
                placeholder="Enter Bank Name"
                countries={!false}
              />
              <div className="">
                <label className="block text-[#212529] text-sm font-bold mb-2">
                  Account Name
                </label>
                <input
                  type="text"
                  className="w-[100%] placeholder:text-[#212529] placeholder:font-light p-3 text-sm bg-[#FAFAFA] border border-gray-[#EBECE6] rounded-md text-header_black font-light focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Account Name"
                  value={accntName}
                  onChange={(e) => setAccntName(e.target.value)}
                />
              </div>
              <div className="">
                <label className="block text-[#212529] text-sm font-bold mb-2">
                  Account Number
                </label>
                <input
                  type="text"
                  className="w-[100%] placeholder:text-[#212529] placeholder:font-light p-3 text-sm bg-[#FAFAFA] border border-gray-[#EBECE6] rounded-md text-header_black font-light focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Account Number"
                  value={accntNum}
                  onChange={(e) => setAccntNum(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            animate={{ height: showDetails ? "300px" : "0", opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={`border-[#EBECE6] overflow-hidden ${
              showDetails ? "h" : "h-"
            }  flex flex-col items-center justify-center rounded-[8px] border mt-2.5 w-full`}
          >
            <div className="border-[#EAECF0] mb-5 w-[48px] h-[48px] flex items-center justify-center border rounded-[10px]">
              <Image
                src={"/icons/search.svg"}
                width={24}
                height={24}
                alt="search"
              />
            </div>
            <h5 className="text-[#101828] mb-2 font-semibold text-lg">
              No Mode of Transaction Selected
            </h5>
            <p className="text-[#475467] text-sm">
              Select a mode to see the requirements
            </p>
          </motion.div>
        )}
        {/* </motion.div> */}
        {/* )} */}
      </AnimatePresence>
      <button
        onClick={() => remove(item)}
        className={`mt-4 ${
          showDetails ? "hidden" : "flex"
        }  ml-auto active:scale-95 cursor-pointer items-center`}
      >
        <svg
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.625 4.125l-.465 7.519c-.119 1.92-.178 2.881-.66 3.572a3 3 0 01-.9.846c-.718.438-1.68.438-3.605.438-1.928 0-2.891 0-3.61-.439a3 3 0 01-.901-.847c-.481-.692-.54-1.654-.656-3.578l-.453-7.511M2.25 4.125h13.5m-3.708 0l-.512-1.056c-.34-.702-.51-1.053-.804-1.271a1.505 1.505 0 00-.206-.13C10.195 1.5 9.806 1.5 9.026 1.5c-.8 0-1.199 0-1.53.176a1.5 1.5 0 00-.208.134c-.297.228-.463.591-.794 1.318l-.454.997M7.125 12.375v-4.5M10.875 12.375v-4.5"
            stroke="#F04438"
            stroke-linecap="round"
          />
        </svg>
        <p className="text-[#F04438] text-sm ml-1">Remove</p>
      </button>
    </div>
  );
};

export default PaymentDetails;
