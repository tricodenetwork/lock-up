import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { EmptyState } from "../../EmptyState";

const Receive = () => {

  const router = useRouter();


  return (
    <div className="flex flex-col w-full justify-center items-center gap-6">
     <EmptyState type="receive" />
    </div>
  );
};

export default Receive;
