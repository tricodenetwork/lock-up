"use client"

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
// import { Header } from '@/components/Header/Header';
import TabsHeader from '@/components/shared/Lend&Borrow/Tabs/TabsHeader';
import { RequestMoneyModal } from '@/components/shared/Modals/RequestMoneyModal';
import Image from 'next/image';

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const tesType = searchParams.get("type");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <main className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="h-16 py-2.5 flex-col justify-center items-start gap-3 inline-flex">
            <div className="text-zinc-900 text-lg font-semibold font-['Nunito'] leading-tight">P2P Marketplace</div>
            <div className="text-stone-500 text-base font-normal font-['Nunito'] leading-tight">Receive and Send Assets Securely.</div>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="md:flex hidden px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700"
          >
            {tesType === "send" ? "Send" : "Receive"} Money
          </button>
        </div>
        <div>

          <div className='flex flex-col md:flex-row gap-4'>
            <div className="flex w-full h-12 px-3.5 rounded-md border md:mb-6 flex-row justify-center items-center gap-2 focus-within:ring-2 ring-primary">
              <input
                className="w-full bg-transparent outline-none border-none"
                type="text"
                placeholder="Search by receivers, senders or anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="relative w-4 h-4">
                <Image
                  src="/assets/icons/search-normal.svg"
                  fill
                  className="w-4 h-4 justify-center items-center flex"
                  alt="search"
                  priority
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row mb-6 justify-start items-start gap-2.5 flex-1">
              <select
                className="w-[10rem] h-12 text-[14px] p-3 text-black rounded border border-stone-300 justify-between items-center flex"
              >
                <option value="">Filter By:</option>
                <option value="location">location</option>
                <option value="weekly-range">weekly range</option>
                <option value="available SUI">available SUI</option>
              </select>


              <button
                onClick={() => setIsOpen(true)}
                className="flex md:hidden h-12 px-4 py-3 bg-primary text-white rounded-lg hover:bg-blue-700"
              >
                {tesType === "send" ? "Send" : "Receive"} Money
              </button>
            </div>
          </div>
        </div>
        <TabsHeader />

      </main>
      {isOpen && (
        <RequestMoneyModal tesType={tesType} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
}


const PageWithSuspense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
};

export default PageWithSuspense;