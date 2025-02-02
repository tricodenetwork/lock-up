import StatsCard from "@/components/ui/StatsCard";
import WhiteBackground from "@/components/WhiteBackground";

const Page = () => {
  // --------------------------------------------VARIABLES
  const headerContents = [
    {
      name: "Total Balance",
      amount: "1,245.67 SUI",
    },
    {
      name: "Credit Score",
      amount: "742",
      color: "#27A943",
    },
    {
      name: "Locked Assets",
      amount: "850.45 SUI",
    },
    {
      name: "Available Balance",
      amount: "395.22 SUI",
    },
    {
      name: "Monthly Yield",
      amount: "3.2%",
      color: "#27A943",
    },
  ];

  const statsContents = [
    {
      name: "Total Investments",
      color: "#F0E6F9",
      icon: "/assets/icons/money.svg",
      amount: "5,000 SUI",
    },
    {
      name: "Pending Transactions",
      color: "#FBE4E7",
      icon: "/assets/icons/arrow-red.svg",
      amount: "450 SUI",
    },
    {
      name: "Earnings from Interest",
      color: "#E4FBE9",
      icon: "/assets/icons/arrow-green.svg",
      amount: "1,250 SUI",
    },
    {
      name: "Pending Loan",
      color: "#FBE4E7",
      icon: "/assets/icons/arrow-red.svg",
      amount: "1,250 SUI",
    },
  ];

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='lg:p-10 min-h-screen'>
      <div className='mb-6'>
        <h5 className='text-2xl font-semibold mb-6'>Welcome Back, User</h5>
        <WhiteBackground styles='bg-white p-6 flex flex-col rounded-[16px] h-[255px]'>
          <p className='font-medium mb-6'>Asset Overview</p>
          <div className='flex items-center justify-between mb-10'>
            {headerContents.map((item) => {
              return (
                <div key={item.name}>
                  <p className='font-medium mb-2 text-[#757575]'>{item.name}</p>
                  <p
                    style={{ color: item.color }}
                    className='font-semibold text-[#1b1b1b] text-2xl'
                  >
                    {item.amount}
                  </p>
                </div>
              );
            })}
          </div>
          <div className='flex items-center'>
            <span className='text-[#757575] mr-1'>Wallet Address</span>
            <span className='text-[#1b1b1b] text-xl'>
              1,2450xA1B2C3D4E5F67890G123H456I789J123K456L78M.67 SUI
            </span>
          </div>
        </WhiteBackground>
      </div>
      <div className='flex items-center w-full justify-between gap-9'>
        {statsContents.map((item) => (
          <StatsCard
            key={item.name}
            name={item.name}
            amount={item.amount}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};
export default Page;
