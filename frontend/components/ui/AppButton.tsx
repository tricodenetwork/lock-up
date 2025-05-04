"use client";
import Link from "next/link";

const AppButton = ({
  dark = true,
  href,
  title,
  style,
  action,
  disabled,
  isLoading,
}: {
  dark?: boolean;
  href?: string;
  title: string;
  style?: string;
  action?: any;
  disabled?: boolean;
  isLoading?: boolean;
}) => {
  const spinner = (
    <div
      className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"
      aria-label="Loading"
    ></div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${style} ${
          !style?.includes("bg-") && "bg-appBlue hover:bg-suiBlue hover:text"
        } duration-150 hover:border-suiBlue hover:border border rounded-[8px] flex items-center justify-center h-[53px] p-4 text-sm`}
      >
        {isLoading ? spinner : title}
      </Link>
    );
  }
  if (action) {
    return (
      <button
        disabled={disabled || isLoading}
        onClick={action}
        className={`${style} ${
          !style?.includes("bg-") && "bg-appBlue hover:bg-suiBlue hover:text"
        } duration-150 hover:border-suiBlue hover:border border rounded-[8px] flex items-center justify-center h-[53px] p-4 text-sm`}
      >
        {isLoading ? spinner : title}
      </button>
    );
  }
};

export default AppButton;
