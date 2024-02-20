import Image from "next/image";
import Link from "next/link"
interface signup {}

const Signup: React.FC<signup> = (props) => {
  return (
    <div className="bg-white h-screen flex flex-col">
      <header className="bg-header py-4 sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="Logo.png"
              width={75}
              height={75}
              alt="Disetir Atasan Logo"
            />
          </div>
        </div>
      </header>
      
      <div className="flex-1 flex">
        <div className="flex-1 bg-blue-500">
          <img
            className="w-full h-full object-cover"
            src="image1.png"
            alt="Left Section Image"
          />
        </div>

      <div className="flex-1 bg-gray-100  flex flex-col items-center justify-center">
          <div className="text-black">
            <div className="mt-16">
              <h1 className=" text-center text-4xl font-bold">Create Account</h1>
              <p className="mt-3">Follow the instructions to make it easier to register and you will be able to explore inside</p>
            </div>

            <form className="w-675px  rounded  ml-3 mt-16 p-4">

            <div className="flex">

            <div className="w-auto">
              <label className="block mb-4">
                <span className="text-gray-700 font-bold">First Name</span>
                <input type="text" className="mt-1 p-2 w-full border rounded"/>
              </label>
            </div>

            <div className="w-auto">
              <label className="block mb-4 ml-6">
                <span className="text-gray-700 font-bold">Last Name</span>
                <input type="text" className="mt-1 p-2 w-full border rounded"/>
              </label>
            </div>
            </div>

            <label className="block mb-4">
              <span className="text-gray-700 font-bold">Email</span>
              <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
            />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 font-bold">Phone Number</span>
              <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
            />
            </label>
            
            <label className="block mb-4">
              <span className="text-gray-700 font-bold">Password</span>
              <input
              type="password"
              className="mt-1 p-2 w-full border rounded"
            />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 font-bold">Re-Enter the Password</span>
              <input
              type="password"
              className="mt-1 p-2 w-full border rounded"
            />
            </label>
            
          <label className="block mb-4">
              <span className="text-gray-700 font-bold">Country</span>
              <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
            />
          </label>
          <div className="flex">

            <div className="w-auto">
              <label className="block mb-4">
                <span className="text-gray-700 font-bold">City</span>
                <input type="text" className="mt-1 p-2 w-80 border rounded"/>
              </label>
            </div>

            <div className="w-auto">
              <label className="block mb-4 ml-9">
                <span className="text-gray-700 font-bold">Province</span>
                <input type="text" className="mt-1 p-2 w-full border rounded"/>
              </label>
            </div>
            </div>
            
            <label className="block mb-4">
              <span className="text-gray-700 font-bold">Zipcode</span>
              <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
            />

            </label>
            <button type="submit"className="bg-black text-white p-2 rounded-md w-full mt-3"> Sign In
            </button>

              <p className="text-center mt-5">Already have an account? <a href="http://localhost:3000/login" className="font-bold underline">LOGIN!</a></p>
            
            </form>
        <div>
      </div>
    </div>        
  </div>
  </div>
  <div className="text-center bg-header">
      <p className="text-white  my-3 text-xs">© 2024 DISETIR ATASAN | DO NOT SELL MY INFO - CA RESIDENT ONLY</p>
  <div/>
    </div>
    </div>
  );
};

export default Signup;
