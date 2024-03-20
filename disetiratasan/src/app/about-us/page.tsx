import Image from "next/image";

const AboutUs = () => {
    return (
        <div>
            {/* <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <Image className="object-cover w-full md:h-575 sm:h-64 h-64" src="/About-Us-Images/ferarri-bg.jpg" alt="..." width={600} height={600}></Image>
                <div className="md:absolute sm:relative absolute md:top-1/2 sm:top-0 top-0 left-0 w-full md:w-1/2 md:h-3/5 sm:h-1/2 bg-black bg-opacity-55 text-white p-5 md:text-xl sm:text-xs text-xs">
                    <p>Our Profile</p>
                    <br />
                    <p>Disetir Atasan is a cutting-edge car dealership that redefines the traditional car-buying experience. Established in 2024, we pride ourselves on being at the forefront of innovation in the automotive industry. Our business model revolves around empowering customers to design their dream cars with unparalleled customization options.</p>
                </div>
            </div> */}
            <div className="border border-black bg-black md:mx-3 sm:mx-3 mx-3 my-2 h-0"></div>
            <div className="flex justify-center mt-2">
                <Image className="bg-black" src="/Logo.png" alt="..." width={150} height={150}></Image>
            </div>
            <div className="border border-black bg-black md:mx-3 sm:mx-3 mx-3 my-2 h-0"></div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 my-3 px-3 md:m-3 sm:m-0 m-0">
                <Image src="/About-Us-Images/hover-home-page.avif" alt="..." width={600} height={600}></Image>
                <div>
                    <p className="font-bold md:text-3xl sm:text-xl text-xl md:mt-0 sm:mt-3 mt-3">Disetir Atasan</p>
                    <p className="md:mt-10 sm:mt-2 mt-2">Disetir Atasan is a cutting-edge car dealership that redefines the traditional car-buying experience.Established in 2024, we pride ourselves on being at the forefront of innovation in the automotive industry. Our business model revolves around empowering customers to design their dream cars with unparalleled customization options.</p>
                </div>
            </div>
            <h1 className="font-bold md:text-2xl sm:text-xl text-xl pt-4 pb-1 px-3 text-slate-800">MEET OUR TEAM</h1>
            <div className="border border-solid border-lime-600 rounded-lg flex flex-col bg-zinc-200 mx-3 mb-2">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 md:gap-x-30 sm:gap-x-20 gap-x-20 py-5">
                    <div className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer team-member">
                        <div className="bg-gray-200 rounded-full p-2">
                            <Image src="/About-Us-Images/luffy-icon.png" alt="Ray Jonathan" width={100} height={100}></Image>
                        </div>
                        <p className="mt-2 font-semibold text-gray-800 hover:text-red-700">Ray Jonathan</p>
                    </div>
                    <div className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer team-member">
                        <div className="bg-gray-200 rounded-full p-2">
                            <Image src="/About-Us-Images/spiderman-icon.png" alt="Joseph Geraldo" width={100} height={100}></Image>
                        </div>
                        <p className="mt-2 font-semibold text-gray-800 hover:text-red-700">Joseph Geraldo</p>
                    </div>
                    <div className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer team-member">
                        <div className="bg-gray-200 rounded-full p-2">
                            <Image src="/About-Us-Images/minion-icon.png" alt="Bryan Imanuel" width={100} height={100}></Image>
                        </div>
                        <p className="mt-2 font-semibold text-gray-800 hover:text-red-700">Bryan Imanuel</p>
                    </div>
                    <div className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer team-member">
                        <div className="bg-gray-200 rounded-full p-2">
                            <Image src="/About-Us-Images/anya-icon.png" alt="Julio Nathanael" width={100} height={100}></Image>
                        </div>
                        <p className="mt-2 font-semibold text-gray-800 hover:text-red-700">Julio Nathanael</p>
                    </div>
                </div>
                <div className="flex object-center justify-center my-3">
                    <button className="bg-white hover:bg-header hover:text-white font-bold md:py-1 sm:py-0 py-0 px-3 rounded-xl md:w-40 sm:w-32 w-32 transition-all duration-700 ease-in-out border-2 border-header hover:border-lime-500">
                        Contact-Us
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-3">
                <h1 className="font-bold md:text-3xl sm:text-xl text-xl py-3 text-slate-800">PARTNERSHIP</h1>
                <div className="grid grid-cols-3 md:gap-24 sm:gap-16 gap-10">
                    <Image src="/Logo/mercedes-logo2.png" alt="..." width={150} height={150}></Image>
                    <Image src="/Logo/ferrari-logo2.png" alt="..." width={150} height={150}></Image>
                    <Image src="/Logo/jaguar-logo2.png" alt="..." width={150} height={150}></Image>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
