
"use client"
import React, { useState } from "react";
// Reusable SearchFilter Component
const SearchFilter = ({ filter, setFilter }) => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFilter((prevFilter) => ({
        ...prevFilter,
        [name]: value,
      }));
    };
  
    return (
    //   <div className="w-[95%] m-auto mt-5 mb-5 border-2 border-[red]">
    //     <div>
    //       <input
    //         type="text"
    //         id="receiver"
    //         name="receiver"
    //         value={filter.receiver}
    //         onChange={handleInputChange}
    //         placeholder="Search by Receiver, senders or anything"
    //         className="rounded-md border-gray-300 px-4 py-2 w-[93%] border-2 border-[red]"
    //       />
    //     </div>

    //   </div>

    <div className="w-[95%] m-auto mt-5 mb-5 flex items-center bg-[white] rounded-md px-2">
  {/* Search Input */}
  <input
    type="text"
    id="receiver"
    name="receiver"
    value={filter.receiver}
    onChange={handleInputChange}
    placeholder="Search by Receiver, Sender, or Wallet Address"
    className="flex-grow rounded-md border-none px-4 py-2 focus:outline-none"
  />

  {/* Search Icon */}
  <button
    onClick={() => {
      // Logic is handled by `filter.receiver` in the parent component
      console.log("Search triggered:", filter.receiver);
    }}
    className="ml-2  focus:outline-none"
  >


    <img
        src="/icons/search-normal.svg"
      className="h-6 w-6"
    />

  </button>
</div>

    );
  };
const P2pExchange = () => {
  const [filter, setFilter] = useState({
    receiver: "",
    walletaddress: "",
  });

  
  const exchangeTransactions = [
    { receiver: "Nancy Tolu", walletaddress: "1,2450xA1B2C3D4E5F67890G123H456I789J12SUI" },
    { receiver: "Tolu Nancy", walletaddress: "1,2450xA1B2C3D4E5F67890G123H456I789J12SUI" },
    { receiver: "Nan Tolu", walletaddress: "1,2450xA1B2C3D4E5F67890G123H456I789J12SUI" },
  ];

  const filteredExchangeTransactions = exchangeTransactions.filter((txn) => {
    return (
      (filter.receiver ? txn.receiver.includes(filter.receiver) : true) ||
      (filter.walletaddress ? txn.walletaddress.toLowerCase().includes(filter.walletaddress.toLowerCase()) : true) 
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

        <div className="mt-10 flex justify-between w-[95%] m-auto">
            
            <div>
                <h2 className="font-extrabold text-[18px] text-[black] justify-left w-[fit-content]">P2P Exchange</h2>
                <p>Send & Receive, International Transfers, or Cross-Currency Exchange</p>
            </div>

            <div>
                <button className="rounded-[8px] bg-[white] px-10 py-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <p className="text-[#0057DB] font-semibold text-[14px]">Send SUI coin</p>
                </button>
            </div>

        </div>



      {/* Search Filter */}
      <SearchFilter filter={filter} setFilter={setFilter} />

         <div className="grid grid-cols-[1fr,1fr] transaction-table-container w-[95%] rounded-2xl">
             <p>Receiver</p>
             <p>Wallet Address</p>
             <p></p>
         </div>       
         {filteredExchangeTransactions.length > 0 ? (
            filteredExchangeTransactions.map((txn, index) => (
         <div>
             <div key={index} className="grid grid-cols-[1fr,1fr,1fr] table-details w-[95%]">
             <p>{txn.receiver}</p>
             <p>{txn.walletaddress}</p>
             <button className="bg-[#0057DB] text-[white] px-2 py-1 w-[80%] rounded-[8px] m-2">
                    Send
            </button>
            </div>
         </div>
          ))
        ) : (
          <tr>
            <h1 colSpan="4">No Exchange History found</h1>
          </tr>
        )}
        
    </>

  );
};

export default P2pExchange;
