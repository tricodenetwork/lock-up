import TransactionHistory from "../history/TransactionHistory";
import InvestmentHistory from "../history/InvestmentHistory";
import ClientOverview from "./ClientOverview";

const Landingpage = () => {
  return (
    <>
      <ClientOverview />

      <div className='flex'>
        <TransactionHistory />
        <InvestmentHistory />
      </div>
    </>
  );
};

export default Landingpage;
