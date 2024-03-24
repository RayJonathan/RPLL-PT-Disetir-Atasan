import Image from "next/image";
import Link from "next/link"
import PaymentPage from "./PaymentPage"
interface signup { }

const Signup: React.FC<signup> = (props) => {
  
    return (
        <div>
            <div className="text-center my-5">
            <p className="text-3xl font-medium">Payment Method</p>
            <p className="text-blue-700 -mt-2">Choose a payment option and fill in the requested infrmation</p>
            </div>
            
            <PaymentPage/>


        </div>
    );
};

export default Signup;
