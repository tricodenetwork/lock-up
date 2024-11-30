

"use client"
import React, { useState } from "react";
import "./TransactionTable.css";

const InvestmentHistory = () => {
  const [filter, setFilter] = useState({
    date: "",
    amountlocked: "",
    interestrate: "",
    duration: "",
    status: "",
    
  });

  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const transactions = [
    { date: "2024-11-29", amountlocked: "2,000 SUI", interestrate: "5%", duration: "3 Month", status: "Completed" },
  ];

  const filteredTransactions = transactions.filter((txn) => {
    return (
      (filter.date ? txn.date.includes(filter.date) : true) &&
      (filter.sender ? txn.sender.toLowerCase().includes(filter.sender.toLowerCase()) : true) &&
      (filter.amount ? txn.amount.includes(filter.amount) : true) &&
      (filter.status ? txn.status.toLowerCase().includes(filter.status.toLowerCase()) : true)
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };
  
  const resetFilters = () => {
    setFilter({ date: "", sender: "", amount: "", status: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="transaction-table-container">

        <div className="flex justify-between">
            
            <div>
                <h2 className="">Investment History</h2>
            </div>

            <div className="border-2 h-[fit-content] p-1">
                {/* Filter Button */}
                <button className="filter-button flex m-auto" onClick={() => setIsModalOpen(true)}>
                <p className="m-auto">Filter By:</p> <img src="/icons/filter.svg" alt="Profile Picture" className="object-cover m-auto"
                />
                </button>
            </div>

        </div>

        {/* Filter Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                <div className="modal">
                    <h3>Filter Transactions</h3>
                    <div className="modal-filters">
                    <input
                        type="date"
                        name="date"
                        value={filter.date}
                        onChange={handleFilterChange}
                        placeholder="Filter by Date"
                    />
                    <input
                        type="text"
                        name="sender"
                        value={filter.sender}
                        onChange={handleFilterChange}
                        placeholder="Filter by Sender"
                    />
                    <input
                        type="text"
                        name="amount"
                        value={filter.amount}
                        onChange={handleFilterChange}
                        placeholder="Filter by Amount"
                    />
                    <select name="status" value={filter.status} onChange={handleFilterChange}>
                        <option value="">Filter by Status</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="Failed">Failed</option>
                    </select>
                    </div>
                    <div className="modal-buttons">
                    <button onClick={() => setIsModalOpen(false)}>Apply Filters</button>
                    <button onClick={resetFilters} className="reset-button">
                        Reset Filters
                    </button>
                    </div>
                </div>
                </div>
            )}

        <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr] transaction-table-container w-[95%] rounded-2xl">

             
            <p>Date</p>
            <p>Amount Locked</p>
            <p>Interest Rate</p>
            <p>Duration</p>
            <p>Status</p>

         </div>       
         {filteredTransactions.length > 0 ? (
            filteredTransactions.map((txn, index) => (
         <div>
              <div key={index} className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr]  table-details">
                <p>{txn.date}</p>
                <p>{txn.amountlocked}</p>
                <p>{txn.interestrate}</p>
                <p>{txn.duration}</p>
                <p>{txn.status}</p>
              </div>
         </div>
          ))
        ) : (
          <tr>
            <h1 colSpan="4">No Investment History found</h1>
          </tr>
        )}
      
    </div>
  );
};

export default InvestmentHistory;
