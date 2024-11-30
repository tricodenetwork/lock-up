import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RowCard from '../../RowCard';
import { EmptyState } from "../../EmptyState";

const Receive = () => {

  const router = useRouter();


  return (
    <div className="flex flex-col w-full justify-center items-center gap-6">
    <div className="bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-3 py-3 px-6 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500">
        <div>Sender</div>
        <div>Interest Rate</div>
        <div></div>
      </div>
      
      {lendingData.map((item, index) => (
        <RowCard key={index} {...item} />
      ))}
    </div>
     {/* <EmptyState type="receive" /> */}
    </div>
  );
};

export default Receive;


const lendingData = [
  {
    sender: 'HabbyFx Xchange',
    isVerified: true,
    availableSUI: 100,
    minSUI: 400,
    interestRate: '15UI'
  },
  {
    sender: 'HabbyFx Xchange',
    isVerified: false,
    availableSUI: 100,
    minSUI: 400,
    interestRate: '15UI'
  },
  {
    sender: 'HabbyFx Xchange',
    isVerified: true,
    availableSUI: 100,
    minSUI: 400,
    interestRate: '15UI'
  },
  {
    sender: 'HabbyFx Xchange',
    isVerified: false,
    availableSUI: 100,
    minSUI: 400,
    interestRate: '15UI'
  },
  {
    sender: 'HabbyFx Xchange',
    isVerified: false,
    availableSUI: 100,
    minSUI: 400,
    interestRate: '15UI'
  }
];