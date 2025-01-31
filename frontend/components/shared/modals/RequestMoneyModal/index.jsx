import React from 'react';
import CloseIcon from "@mui/icons-material/Close";

export function RequestMoneyModal({ isOpen, setIsOpen, tesType }) {
  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white text-black rounded-lg p-6 w-[480px]">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold mb-4">{tesType === "send" ? "Send" : "Receive"} Asset</h2>
          <button>
            <CloseIcon onClick={handleClose} />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder={`Enter amount of SUI ${tesType === "send" ? "" : "to borrow"}`}
              className="w-full p-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder={`Enter duration for ${tesType === "send" ? "Send" : "borrowing"}`}
              className="w-full p-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder={`${tesType === "send" ? "Enter interest rate" : "Enter collateral"}`}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
            ></textarea>
          </div>
          <button
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {tesType === "send" ? "Send" : "Request"}
          </button>
        </div>
      </div>
    </div>
  );
}