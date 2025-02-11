"use client";
import Link from "next/link";

const AppButton = ({
  dark = true,
  href,
  title,
  style,
  action,
  disabled,
}: {
  dark?: boolean;
  href?: string;
  title: string;
  style?: string;
  action?: any;
  disabled?: boolean;
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${style} ${
          !style?.includes("bg-") && "bg-appBlue hover:bg-suiBlue hover:text"
        } duration-150  hover:border-suiBlue hover:border border rounded-[8px] flex items-center justify-center  h-[53px] p-4  text-sm`}
      >
        {title}
      </Link>
    );
  }
  if (action) {
    return (
      <button
        disabled={disabled}
        onClick={action}
        className={`${style} ${
          !style?.includes("bg-") && "bg-appBlue hover:bg-suiBlue hover:text"
        } duration-150 hover:border-suiBlue hover:border border rounded-[8px] flex items-center justify-center  h-[53px] p-4   text-sm`}
      >
        {title}
      </button>
    );
  }
};

export default AppButton;
