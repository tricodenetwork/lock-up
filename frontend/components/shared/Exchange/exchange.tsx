"use client";
import React, { useState } from "react";
// Reusable SearchFilter Component
const SearchFilter = ({
  filter,
  setFilter,
}: {
  filter: any;
  setFilter: any;
}) => {
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFilter((prevFilter: any) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  //     return (
  //     //   <div className="w-[95%] m-auto mt-5 mb-5 border-2 border-[red]">
  //     //     <div>
  //     //       <input
  //     //         type="text"
  //     //         id="receiver"
  //     //         name="receiver"
  //     //         value={filter.receiver}
  //     //         onChange={handleInputChange}
  //     //         placeholder="Search by Receiver, senders or anything"
  //     //         className="rounded-md border-gray-300 px-4 py-2 w-[93%] border-2 border-[red]"
  //     //       />
  //     //     </div>

  //     //   </div>

  //     <div className="w-[95%] m-auto mt-5 mb-5 flex items-center bg-[white] border-2 border-[red] rounded-md px-2">
  //   {/* Search Input */}
  //   <input
  //     type="text"
  //     id="receiver"
  //     name="receiver"
  //     value={filter.receiver}
  //     onChange={handleInputChange}
  //     placeholder="Search by Receiver, Sender, or Wallet Address"
  //     className="rounded-md border-2 border-[red] px-4 py-2 focus:outline-none"
  //   />

  //   {/* Search Icon */}
  //   <button
  //     onClick={() => {
  //       // Logic is handled by `filter.receiver` in the parent component
  //       console.log("Search triggered:", filter.receiver);
  //     }}
  //     className="ml-2  focus:outline-none"
  //   >

  //     <img
  //         src="/icons/search-normal.svg"
  //       className="h-6 w-6"
  //     />

  //   </button>
  // </div>

  //     );
};
const P2pExchange = () => {
  const [filter, setFilter] = useState({
    receiver: "",
    walletaddress: "",
  });

  const exchangeTransactions = [
    {
      receiver: "Nancy Tolu",
      walletaddress: "1,2450xA1B2C3D4E5F67890G123H456I789J12SUI",
    },
    {
      receiver: "Tolu Nancy",
      walletaddress: "1,2450xA1B2C3D4E5F67890G123H456I789J12SUI",
    },
    {
      receiver: "Nan Tolu",
      walletaddress: "1,2450xA1B2C3D4E5F67890G123H456I789J12SUI",
    },
  ];

  const filteredExchangeTransactions = exchangeTransactions.filter((txn) => {
    return (
      (filter.receiver ? txn.receiver.includes(filter.receiver) : true) ||
      (filter.walletaddress
        ? txn.walletaddress
            .toLowerCase()
            .includes(filter.walletaddress.toLowerCase())
        : true)
    );
  });

  // Filtering Logic (OR Condition)
  //   const filteredExchangeTransactions = exchangeTransactions.filter((txn) => {
  //     return (
  //       (filter.receiver && txn.receiver.toLowerCase().includes(filter.receiver.toLowerCase())) ||
  //       (filter.walletaddress && txn.walletaddress.toLowerCase().includes(filter.walletaddress.toLowerCase()))
  //     );
  //   });

  return (
    <>
      <div className='mt-10 flex items-center justify-between w-[95%] mx-auto w-[90%]'>
        {/* Left Section */}
        <div>
          <h2 className='font-extrabold text-[67px] text-gray-800'>
            P2P Exchange
          </h2>
          <p className='text-gray-600'>
            Send & Receive, International Transfers, or Cross-Currency Exchange
          </p>
        </div>

        {/* Right Section */}
        <div>
          <button className='bg-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
            <p className='text-[#0057DB] font-semibold text-sm'>
              Send SUI Coin
            </p>
          </button>
        </div>
      </div>

      {/* Search Filter */}
      <SearchFilter filter={filter} setFilter={setFilter} />

      <div className='w-[95%] rounded-2xl overflow-hidden'>
        <table className='table-auto w-full text-left border-collapse border border-gray-200'>
          {/* Table Header */}
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-4 py-2 border border-gray-200'>Receiver</th>
              <th className='px-4 py-2 border border-gray-200'>
                Wallet Address
              </th>
              <th className='px-4 py-2 border border-gray-200'></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredExchangeTransactions.length > 0 ? (
              filteredExchangeTransactions.map((txn, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className='px-4 py-2 border border-gray-200'>
                    {txn.receiver}
                  </td>
                  <td className='px-4 py-2 border border-gray-200'>
                    {txn.walletaddress}
                  </td>
                  <td className='border border-gray-200 text-center'>
                    {/* <button className="bg-[red] text-white px-4 py-2 rounded-lg">
                Send
              </button> */}

                    <button className='bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2'>
                      Send
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan='3'
                  className='text-center px-4 py-2 border border-gray-200'
                >
                  No Exchange Transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default P2pExchange;
