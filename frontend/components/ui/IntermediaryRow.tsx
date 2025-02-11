"use client";
import { Intermediary } from "@/types/Intermediary";
import AppButton from "./AppButton";
import { useState } from "react";
import ModalComponent from "../shared/modals/ModalComponent";
import ConfirmIntermediaryModal from "../shared/modals/ConfirmIntermediaryModal";
import TransactionSuccessful from "../shared/modals/TransactionSuccessful";
import TransactionSubmitted from "../shared/modals/TransactionSubmitted";
import TransactionRecived from "../shared/modals/TransactionRecieved";

const IntermediaryRow = ({ item }: { item: Intermediary }) => {
  // --------------------------------------------VARIABLES
  const [confirm, setConfirm] = useState(false);

  //-----------------------------------------------------------FUNCTIONS

  const select = async () => {};

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='grid border-b  place-content-center mb-2 w-full border-[#c4c4c4] pb-0 h-[79px] grid-cols-[1.5fr,1.5fr,0.8fr]'>
      {confirm && (
        <ModalComponent
          isModalOpen={confirm}
          setIsModalOpen={setConfirm}
          // Content={<ConfirmIntermediaryModal item={item} close={setConfirm} />}
          Content={<TransactionRecived />}
        />
      )}
      <div className='flex gap-2   flex-col'>
        <h6 className='font-bold text-lg'>{item.name}</h6>
        <div className='flex gap-3 text-[#666666] items-center'>
          <span>{`#${item.maxAmount.toLocaleString()} Max`}</span>
          <span className='w-1 h-1 rounded-full bg-[#9890A6]' />
          <span>{`${item.averageTime} `}</span>
          <span className='w-1 h-1 rounded-full bg-[#9890A6]' />
          <span>{`Charge ${item.fee}% `}</span>
        </div>
      </div>
      <p className='text-[#1b1b1b]  flex items-center justify-center'>
        {item.paymentChannel}
      </p>
      <div className=' flex justify-center items-center'>
        <AppButton
          style=''
          title='Select Intermediary'
          action={() => setConfirm(true)}
        />
      </div>
    </div>
  );
};

export default IntermediaryRow;
