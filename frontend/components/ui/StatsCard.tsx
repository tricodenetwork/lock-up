import Image from "next/image";
import WhiteBackground from "../WhiteBackground";

const StatsCard = ({
  name,
  amount,
  icon,
  color,
}: {
  name: string;
  amount: string;
  icon: string;
  color: string;
}) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <WhiteBackground styles='w-full gap-4 flex items-center bg-white p-10 rounded-[20px] h-[151px]'>
      <div
        style={{
          backgroundColor: color,
        }}
        className='w-[48px] flex items-center justify-center h-[48px] rounded-full '
      >
        <Image src={icon} width={20} height={20} alt={name} />
      </div>
      <div>
        <p className='font-semibold text-[#757575] mb-4'>{name}</p>
        <p className='font-bold text-2xl text-[#1b1b1b]'>{amount}</p>
      </div>
    </WhiteBackground>
  );
};
export default StatsCard;
