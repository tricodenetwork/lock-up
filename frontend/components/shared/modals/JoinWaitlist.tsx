"use client";
import AppButton from "@/components/ui/AppButton";
import { useState } from "react";
import axios from "axios";
import { joinWaitlist } from "@/actions/waitlist";
import toast from "react-hot-toast";

const JoinWaitlist = ({
  setJoined,
  setSuccess,
}: {
  setJoined: (e: boolean) => void;
  setSuccess: (e: boolean) => void;
}) => {
  // --------------------------------------------VARIABLES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  //-----------------------------------------------------------FUNCTIONS
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    if (!name || !validateEmail(email)) {
      setError("Please enter a valid name and email.");
      return;
    }
    setError("");
    const toastId = toast.loading("Joining...");
    try {
      const res = await joinWaitlist(name, email);
      if (res.ok) {
        setJoined(false);
        setSuccess(true);
      }
      if (res.exist) {
        toast.error("Already Joined the waitlist", { id: toastId });
      }
      if (!res.ok && !res.exist) {
        toast.error("An error occured", { id: toastId });
      }
    } catch (error) {
      console.error("Error joining the waitlist", error);
    }
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className="w-[360px] lg:w-[480px] lg:h-[534px] flex flex-col justify-start py-[66px] items-center rounded-xl">
      <h4 className="font-semibold text-[#101828] text-3xl">Join Waitlist</h4>
      <p className="text-[#475467] max-w-[70%] text-center mt-3 mb-8">
        Join the Waitlist Now for Early Access and Exclusive Updates!
      </p>
      <div className="w-[290px] lg:w-[360px] flex flex-col gap-5 h-max">
        <div className="flex flex-col gap-[6px]">
          <p>Full Name</p>
          <input
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-[14px] rounded-[8px] border-[#D0D5DD] border h-[44px]"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <p>Email</p>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-[14px] rounded-[8px] border-[#D0D5DD] border h-[44px]"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <AppButton
        title="Submit"
        style="mt-[24px] w-[290px] lg:w-[360px] text-white font-semibold"
        action={handleSubmit}
      />
    </div>
  );
};
export default JoinWaitlist;
