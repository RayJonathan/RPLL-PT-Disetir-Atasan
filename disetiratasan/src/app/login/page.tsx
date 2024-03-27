interface LoginProps { }

const Login: React.FC<LoginProps> = (props) => {
    return (
        <div className="bg-white h-screen flex flex-col">
            <div className="flex-1 flex">
                <div className="flex-1 bg-blue-500">
                    <img
                        className="w-full h-full object-cover"
                        src="image1.png"
                        alt="Left Section Image"
                    />
                </div>

                <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center">
                    <div className="text-black">
                        <div className="-mt-32">
                            <h1 className=" text-center text-4xl font-bold mb-10">Login to your Account</h1>
                        </div>

                        <form className="w-675px p-8 rounded  ml-3 mt-16">
                            <label className="block mb-4">
                                <span className="text-gray-700 font-bold">Email</span>
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

                            <button type="submit" className="bg-black text-white p-2 rounded-md w-full mt-3"> Sign In
                            </button>

                            <p className="text-center mt-5">Don't have an account? <a href="http://localhost:3000/signup" className="font-bold underline">SIGN UP!</a></p>
                        </form>
                        <div className="flex items-center justify-center mx-auto bg-white transition-all duration-500 cursor-pointer w-72 rounded-xl hover:bg-header hover:text-white">
                            <a href="/api/auth/signin" className="flex items-center">
                                <img src="/Logo/icons-google.png" alt="Google Logo" className="h-8 mr-2 hover:filter-none hover:invert" />
                                <button className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Login with Google
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

