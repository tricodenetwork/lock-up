import React from "react";
import NotificationItem from "../NotificationItem";
import WhiteBackground from "../WhiteBackground";

const All = () => {
  return (
    <>
      <div className="pb-[12px]">
        <span className="text-[#999999] font-bold text-[16px] ">
          Last 7 days:
        </span>
      </div>

      <WhiteBackground styles="rounded-[16px] ">
        <NotificationItem
          notificationTitle="Transaction Completed Successfully"
          date="Dec 1, 2024"
          message="Your transaction #TX-1234 has been successfully completed. You can check your transaction history for a full breakdown of the payment and its status."
        />
        <NotificationItem
          notificationTitle="Transaction Completed Successfully"
          date="Dec 1, 2024"
          message="Your transaction #TX-1234 has been successfully completed. You can check your transaction history for a full breakdown of the payment and its status."
        />
        <NotificationItem
          notificationTitle="Transaction Completed Successfully"
          date="Dec 1, 2024"
          message="Your transaction #TX-1234 has been successfully completed. You can check your transaction history for a full breakdown of the payment and its status."
        />
      </WhiteBackground>

      <div className="pb-[12px] pt-[24px]">
        <span className="text-[#999999] font-bold text-[16px] ">Older:</span>
      </div>

      <WhiteBackground styles="rounded-[16px] ">
        <NotificationItem
          notificationTitle="Transaction Completed Successfully"
          date="Dec 1, 2024"
          message="Your transaction #TX-1234 has been successfully completed. You can check your transaction history for a full breakdown of the payment and its status."
        />
        <NotificationItem
          notificationTitle="Transaction Completed Successfully"
          date="Dec 1, 2024"
          message="Your transaction #TX-1234 has been successfully completed. You can check your transaction history for a full breakdown of the payment and its status."
        />
        <NotificationItem
          notificationTitle="Transaction Completed Successfully"
          date="Dec 1, 2024"
          message="Your transaction #TX-1234 has been successfully completed. You can check your transaction history for a full breakdown of the payment and its status."
        />
      </WhiteBackground>
    </>
  );
};

export default All;
