import React, { useState } from "react";

import Receive from "./Receive";
import Send from "./Send";
import Link from "next/link";

const SettingsHeader = ({ defaultTab }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full">
      <div className="flex w-full sm:w-[29%] items-center justify-between mx-auto mt-5">
        <Link
          href={`/lend-borrow?type=receive`}
          className={`py-2 h-[50px] ${activeTab === 1 ? "border-b-[3px] border-primary text-primary" : "text-black"
            }`}
          onClick={() => handleTabClick(1)}
        >
          <div className="flex flex-col w-[100px] sm:w-[120px] gap-0.5 items-center justify-center">
            <div className="text-[17px]">Receive</div>
          </div>
        </Link>

        <Link
          href={`/lend-borrow?type=send`}
          className={`py-2 h-[50px] rounded-t-md ${activeTab === 2 ? "border-b-[3px] border-primary text-primary" : "text-black"
            }`}
          onClick={() => handleTabClick(2)}
        >
          <div className="flex flex-col w-[100px] sm:w-[120px] gap-0.5 items-center justify-center">
            <div className="text-[17px] w-auto">Send</div>
          </div>
        </Link>
      </div>

      {/* Content for each tab */}
      {activeTab === 1 && (
        <div>
          <Receive />
        </div>
      )}
      {activeTab === 2 && (
        <div>
          <Send />
        </div>
      )}
    </div>
  );
};

export default SettingsHeader;
