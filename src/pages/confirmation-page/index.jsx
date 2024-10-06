import { Link } from "react-router-dom";
import InheritPage from "../../components/inherit";
const ConfirmationPage = () => {
  return (
    <>
      <div className="d-flex gap-3 justify-content-between w-100 p-4">
        <div className="w-50 d-flex align-items-center flex-column gap-1">
            
            <img  className="mt-5" src="src\images\confirmation.png" alt="not defined" width={100 } height={100}/>
            <p className="w-50 text-center mt-4"> Thank you Joe for buying Candleaf. The nature is grateful to you. Now that your order is confirmed it will be ready to ship in 2 days. Please check your inbox in the future for your order updates.</p>
            <Link to="/"  type="button" className="  mt-3 btn btn-success btn-lg">Back to shopping</Link>
            
        </div>
        <InheritPage />
      </div>
    </>
  );
};
export default ConfirmationPage;
