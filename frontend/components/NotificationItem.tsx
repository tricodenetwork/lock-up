import React from "react";
import WhiteBackground from "./WhiteBackground";

interface NotificationItemProps {
  message: string;
  notificationTitle: string;
  date: string;
}
const NotificationItem: React.FC<NotificationItemProps> = ({
  message,
  notificationTitle,
  date,
}) => {
  return (
    <WhiteBackground styles="rounded-[16px] w-[1000px]">
      <div className="flex flex-col  pt-[24px] pb-[20px] px-[24px] ">
        <div className="flex justify-between ">
          <span className="text-base font-bold">{notificationTitle}</span>
          <span className="text-base font-medium text-[#999999]">{date}</span>
        </div>

        <span className="pt-[8px] text-base pb-[16px] border-b border-[#E6E6E6]">
          {message}
        </span>
      </div>
    </WhiteBackground>
  );
};

export default NotificationItem;
