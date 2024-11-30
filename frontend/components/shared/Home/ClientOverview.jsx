"use client";
import { motion } from 'framer-motion';

const ClientOverview = () => {


  return (

        <>
        
            <div>

                <p className="ml-10 my-2">Welcome back User</p>

                <div className="h-[257px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] rounded-2xl mx-9 px-4 py-7">

                    <div>
                        <p>Assest Overview</p>
                    </div>

                    <div className="flex justify-between mt-5 gap-20">
                        <div className="">
                            <p className="text-[#757575] text-[16px]">Total Balance</p>
                            <div className="flex">
                                <p className="text-[#1B1B1B] font-extrabold text-[24px]">1,245.67 SUI</p>
                                {/* <motion.div
                                initial={{ rotate: 0 }} // Initial state
                                animate={{ rotate: 360 }} // Animate to 360 degrees
                                transition={{
                                    duration: 2, // Duration of the spin (in seconds)
                                    // repeat: 1, // Keep spinning
                                    ease: "linear", // Smooth, consistent spinning
                                }}
                                className="w-[25px] h-[25px] m-auto" // Optional styling for div
                                >
                                    <img src="/icons/sui-removebg.png" className="w-[25px] h-[25px] border-2 border-[red] m-auto"/>
                                </motion.div> */}

                            </div>
                        </div>

                        <div className="text-[16px]">                            
                            <p className="text-[#757575] text-[12px]">Credit Score</p>
                            <p className="text-[#27A943] font-extrabold text-[24px]">742</p>
                        </div>

                        <div className="text-[16px]">                        
                            <p className="text-[#757575] text-[12px]">Locked Assets</p>
                            <p className="text-[#1B1B1B] font-extrabold text-[24px]">850.45 SUI</p>
                        </div>

                        <div className="text-[16px]">                         
                            <p className="text-[#757575] text-[12px]">Available Balance</p>
                            <p className="text-[#1B1B1B] font-extrabold text-[24px]">395.22 SUI</p>
                        </div>

                        <div className="text-[16px]">
                            <p className="text-[#757575] text-[12px]">Monthly Yield</p>
                            <p className="text-[#27A943] font-extrabold text-[24px]">3.2%</p>
                        </div>

                    </div>

                    <div className="flex gap-2 mt-5">
                        <p>Wallet Address</p>
                        <p className="font-bold">1,2450xA1B2C3D4E5F67890G123H456I789J123K456L78M.67 SUI</p>
                    </div>

                </div>

            </div>
            
            <div className="flex mt-7">

                <div className="flex h-[151px] w-[309px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] rounded-2xl mx-9  m-auto">
                    
                    <div className="flex m-auto gap-2">
                        
                        <div className="h-[fit-content]">
                            <img
                                src="/icons/Frame1.svg"
                                className="object-cover m-auto" 
                            />
                        </div>

                        <div className="h-[fit-content] ">
                            <p>Total Investments</p>
                            <p className="font-bold">5,000 SUI </p>
                        </div>
                        
                    </div>


                </div>
                

                <div className="flex h-[151px] w-[309px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] rounded-2xl mx-9  m-auto">
                    
                    <div className="flex m-auto gap-2">
                        
                        <div className="h-[fit-content] ">
                            <img
                                src="/icons/statsdown.svg"
                                className="object-cover m-auto" 
                            />
                        </div>

                        <div className="h-[fit-content] ">
                            <p>Pending Transactions</p>
                            <p className="font-bold">450 SUI</p>
                        </div>
                        
                    </div>


                </div>

                
                <div className="flex h-[151px] w-[309px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] rounded-2xl mx-9  m-auto">
                    
                    <div className="flex m-auto gap-2">
                        
                        <div className="h-[fit-content] ">
                            <img
                                src="/icons/Frame2.svg"
                                className="object-cover m-auto" 
                            />
                        </div>

                        <div className="h-[fit-content] ">
                            <p>Earnings from Interest</p>
                            <p className="font-bold">1,250 SUI</p>
                        </div>
                        
                    </div>


                </div>

                
                <div className="flex h-[151px] w-[309px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] rounded-2xl mx-9  m-auto">
                    
                    <div className="flex m-auto gap-2">
                        
                        <div className="h-[fit-content] ">
                            <img
                                src="/icons/statsdown.svg"
                                className="object-cover m-auto" 
                            />
                        </div>

                        <div className="h-[fit-content] ">
                            <p>Pending Loan</p>
                            <p className="font-bold">1,250 SUI</p>
                        </div>
                        
                    </div>


                </div>

            </div>
            
        </>
  );
};

export default ClientOverview;
