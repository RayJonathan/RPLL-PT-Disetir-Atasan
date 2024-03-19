import Image from "next/image";

const Vehicle = () => {
    return (
        <div className="p-3">
            <div className="flex flex-col items-center justify-center">
                <p className="text-center pt-5 m-3 font-bold md:text-3xl sm:text-xl text-xl">
                    All Vehicles
                </p>
                <p className=" md:px-10 sm:px-5 px-5 text-center">
                    Discover exclusive promotions on the latest range of premium sedans,
                    coupes, SUVs, wagons, convertibles, roadsters, hybrids, and electric
                    vehicles available for purchase.
                </p>
            </div>
            <div className="border border-black bg-black md:mx-8 sm:mx-5 mx-5 my-2 h-0"></div>
            <div className="flex flex-row justify-center mb-3 gap-8">
                <Image
                    src="/Logo/mercedes-logo.png"
                    alt="..."
                    width={60}
                    height={60}
                ></Image>
                <Image
                    src="/Logo/ferarri-logo.png"
                    alt="..."
                    width={60}
                    height={60}
                ></Image>
                <Image
                    src="/Logo/jaguar-logo.png"
                    alt="..."
                    width={60}
                    height={60}
                ></Image>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-3 p-3 h-1/2">
                <div className="p-2">
                    <div className="m-3">
                        <p className="font-bold md:text-xl sm:text-lg text-lg">Ferarri Daytona</p>
                        <p className="text-sm pl-3 pr-1 pt-1">
                            Starting $80.000
                        </p>
                    </div>
                    <Image
                        className="p-2 rounded-tl-xl rounded-tr-xl"
                        src="/Vehicle/jaguar-car.png"
                        alt="..."
                        width={400}
                        height={400}
                    ></Image>
                    <div className="relative text-left md:text-lg sm:text-xs text-xs">
                        <select className="block appearance-none w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer">
                            <option>Select Model</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Vehicle;
