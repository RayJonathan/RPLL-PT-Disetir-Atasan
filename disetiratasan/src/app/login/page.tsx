interface LoginProps { }
import CollectionForm from "@/app/login/CollectionForm"
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

                            <CollectionForm />
                        
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;