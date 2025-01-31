import Image from "next/image";
import WhiteBackground from "../WhiteBackground";

export const Box = ({
  src,
  title,
  desc,
}: {
  src: string;
  title: string;
  desc: string;
}) => {
  return (
    <WhiteBackground styles='flex flex-col gap-2 w-[200px] bg-opacity-40 rounded-[4px]  shadow-[_0px_0px_20px] shadow-black/5 h-[129px] flex flex-col px-[12px] py-[15px] '>
      <div className='w-[36px] h-[36px] rounded-[4px] overflow-hidden bg-white flex items-center justify-center'>
        <div className='w-[20px] h-[20px] relative'>
          <Image
            src={`/icons/${src}.svg`}
            alt={src}
            fill
            className='object-contain'
          />
        </div>
      </div>
      <h5 className='text-header_black font-medium text-sm'>{title}</h5>
      <p className='text-header_black opacity-50 text-xs'>{desc}</p>
    </WhiteBackground>
  );
};
