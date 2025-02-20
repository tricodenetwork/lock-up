"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCustomWallet } from "@/contexts/CustomWallet";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { Transaction } from "@mysten/sui/transactions";
import clientConfig from "@/config/clientConfig";

export default function ProfilePopover() {
  const {
    isConnected,
    logout,
    executeTransactionBlockWithoutSponsorship,
    redirectToAuthUrl,
    emailAddress,
    address,
  } = useCustomWallet();

  useEffect(() => {
    const registerUser = async () => {
      try {
        const txb = new Transaction();

        txb.moveCall({
          target: `${clientConfig.PACKAGE_ID}::lockup::register_user`,
          arguments: [txb.object("0x6")],
        });

        const res = await executeTransactionBlockWithoutSponsorship({
          tx: txb,
          options: {
            showEffects: true,
            showObjectChanges: true,
          },
        });
      } catch (error) {}
    };
  }, [isConnected]);

  if (isConnected) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <div className=''>
            <Button
              className='hidden bg-appBlack text-white text-sm sm:block  hover:opacity-80  rounded-[12px] w-max px-4 h-[53px]'
              variant={"secondary"}
            >
              {emailAddress}
            </Button>
            <Avatar className='block sm:hidden'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback className='text-black'>CN</AvatarFallback>
            </Avatar>
          </div>
        </PopoverTrigger>
        <PopoverContent className='w-max p-0'>
          <Card className='border-none justify-center  h-[80px] w-[150px] sm:w-[200px] bg-appBlack text-white flex flex-col items-center shadow-none'>
            <CardContent className='p-0'>
              <div className='flex flex-row gap-1 items-center'>
                <div className='flex flex-row text-sm gap-1'>
                  <span>{`${address?.slice(0, 5)}...${address?.slice(
                    63
                  )}`}</span>
                  <a
                    href={`https://suiscan.xyz/testnet/account/${address}`}
                    target='_blank'
                  >
                    <ExternalLink width={12} />
                  </a>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex m-0 p-0'>
              <Button
                variant={"destructive"}
                size={"sm"}
                className='w-full p-0 h-max text-center'
                onClick={logout}
              >
                Logout
              </Button>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Button
      className='bg-appBlack text-white  hover:opacity-80 text-sm rounded-[12px] w-[100px] sm:w-[154px] h-[53px]'
      onClick={() => {
        redirectToAuthUrl();
      }}
    >
      <span className='hidden sm:flex'>Connect Wallet</span>
      <span className='block sm:hidden'>Connect </span>
    </Button>
  );
}
