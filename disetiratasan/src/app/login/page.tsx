import Image from "next/image";
import Link from "next/link"
interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <div className="bg-white h-screen flex flex-col">
      <header className="bg-header py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="Logo.png"
              width={150}
              height={150}
              alt="Disetir Atasan Logo"
            />
          </div>
        </div>
      </header>
      
      <div className="flex-1 flex">
        <div className="flex-1 bg-blue-500">
          <img
            className="w-full h-675px object-cover"
            src="image1.png"
            alt="Left Section Image"
          />
        </div>

      <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center">
          <div className="text-black">
            <div className="-mt-32">
              <h1 className="text-4xl font-bold mb-10">Login to your Account</h1>
            </div>

            <form className="max-w-md p-8 bg-white rounded shadow-md ml-3 mt-16">
            <label className="block mb-4">
              <span className="text-gray-700">Email</span>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Password</span>
              <input
              type="password"
              className="mt-1 p-2 w-full border rounded"
            />
            </label>

        <button
          type="submit"
          className="bg-black text-white p-2 rounded w-full"
        >
        Sign In
        </button>
        <p className="text-center mt-3">Don't have an account?{" "}<a className="font-bold">SIGN UP!</a></p>
  </form>
  </div>        
</div>

      </div>
    </div>
  );
};

export default Login;
