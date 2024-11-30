import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { EmptyState } from "../../EmptyState";

const Send = () => {

  const router = useRouter();


  return (
    <div className="flex flex-col w-full justify-center items-center gap-6">
     <EmptyState type="send" />
    </div>
  );
};

export default Send;
