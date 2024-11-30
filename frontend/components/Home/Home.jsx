import TransactionHistory from "../History/TransactionHistory";
import InvestmentHistory from "../History/InvestmentHistory";
import ClientOverview from "./ClientOverview";

const Landingpage = () => {


  return (

    <>

    
      <ClientOverview/>

      <div className="flex">
          <TransactionHistory/>
          <InvestmentHistory/>
      </div>
      
    </>
  );
};

export default Landingpage;
