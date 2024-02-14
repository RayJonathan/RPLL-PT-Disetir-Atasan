
import Image from "next/image";

interface LoginProps {
}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <div className="bg-white ">
    <header className="bg-header py-4">
        <img 
          src="Logo.png"
          width={150}
          height={150}
          alt="Disetir Atasan Logo"
        />
    </header>
        <div>
            <img src="image1.png"
            className="h-675px"/>
        </div>

            <h1>Login to your Account</h1>
        <div>
        </div>

    </div>
    
  
  );
  }
export default Login;
