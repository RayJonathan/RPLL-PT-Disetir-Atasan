import Image from "next/image";
import Link from "next/link"
import RadiobuttonList from "./RadiobuttonList"
interface signup { }

const Signup: React.FC<signup> = (props) => {
  
    return (
        <div>
            
            <Image src="/Vehicle/2023EQB.png" alt="test" layout="responsive" width={1920} height={1080} />
            <div className="text-center my-9">
                
            <p className=" font-serif font-bold text-4xl"> SELECT A LINE</p>
            <p> 2023 EQB 250+ SUV</p>
            </div>
            <RadiobuttonList/>
        </div>
    );
};

export default Signup;
