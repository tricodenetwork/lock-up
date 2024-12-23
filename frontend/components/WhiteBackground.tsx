import React from "react";

const WhiteBackground = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles: string;
}) => {
  return <div className={` ${styles} bg-white`}>{children}</div>;
};

export default React.memo(WhiteBackground);
