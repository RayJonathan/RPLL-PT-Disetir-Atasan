import Image from "next/image";
import 'animate.css'
const AboutUs = () => {
    return (
        <div className="bg-disetircolour  animate__animated animate__fadeIn" >
            <div className="flex flex-col bg-gradient-to-t from-disetircolour to-transparent min-h-screen" style={{ backgroundImage: `linear-gradient(to top, rgba(16, 29, 52, 1), rgba(0,0,255,0.2)), url('/About-Us-Images/bg-image.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex justify-center">
                    <Image src="/About-Us-Images/DA-WHITE.png" className="mt-14" alt="..." width={150} height={150}></Image>
                </div>
                <div className="md:mx-3 sm:mx-3 mx-3 my-2"></div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 my-3 px-3 md:m-3 sm:m-0 m-0">
                    <div className="text-white">
                        <p className="ml-16 my-44 text-3xl font-serif">Disetir Atasan is a cutting-edge car dealership that redefines the traditional car-buying experience. Established in 2024, we pride ourselves on being at the forefront of innovation in the automotive industry. Our business model revolves around empowering customers to design their dream cars with unparalleled customization options.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-gradient-to-b from-disetircolour to-transparent min-h-screen">
                <h1 className="text-white text-5xl my-3 font-bold pl-4 font-mono">MEET OUR TEAM</h1>
                <div className="rounded-lg flex flex-col mx-3 mb-2">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 md:gap-x-30 sm:gap-x-20 gap-x-20 py-5">
                        <div className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer team-member">
                            <div className="relative w-56 h-72 bg-blue-950 shadow-white rounded-lg shadow-md overflow-hidden">
                                <Image
                                    src="/About-Us-Images/luffy-icon.png"
                                    alt="Ray Jonathan"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute bottom-0 left-0 right-0 w-full h-36"
                                ></Image>
                                <p className="absolute bottom-0 left-0 right-0 text-center text-black font-semibold pb-2">Ray Jonathan</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer team-member">
                            <div className="relative w-56 h-72 bg-blue-950 shadow-white rounded-lg shadow-md overflow-hidden">
                                <Image
                                    src="/About-Us-Images/spiderman-icon.png"
                                    alt="Joseph Geraldo"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute bottom-0 left-0 right-0 w-full h-36"
                                ></Image>
                                <p className="absolute bottom-0 left-0 right-0 text-center text-black font-semibold pb-2">Joseph Geraldo</p>
                            </div>

                        </div>
                        <div className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer team-member">
                            <div className="relative w-56 h-72 bg-blue-950 shadow-white rounded-lg shadow-md overflow-hidden">
                                <Image
                                    src="/About-Us-Images/minion-icon.png"
                                    alt="Bryan Imanuel"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute bottom-0 left-0 right-0 w-full h-36"
                                ></Image>
                                <p className="absolute bottom-0 left-0 right-0 text-center text-black font-semibold pb-2">Bryan Imanuel</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer team-member">
                            <div className="relative w-56 h-72 bg-blue-950 shadow-white rounded-lg shadow-md overflow-hidden">
                                <Image
                                    src="/About-Us-Images/anya-icon.png"
                                    alt="Julio Nathanael"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute bottom-0 left-0 right-0 w-full h-36"
                                ></Image>
                                <p className="absolute bottom-0 left-0 right-0 text-center text-black font-semibold pb-2">Julio Nathanael</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center my-3">
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            <a href="http://localhost:3000/contact-us">Contact Us</a>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-16">
                    <h1 className="text-3xl font-mono font-medium text-white">PARTNERSHIP</h1>
                    <div className="mt-10 grid grid-cols-3 md:gap-24 sm:gap-16 gap-10">
                        <Image src="/Logo/mercedes-logo2.png" alt="..." width={100} height={100}></Image>
                        <Image src="/Logo/ferrari-logo2.png" alt="..." width={100} height={100}></Image>
                        <Image src="/Logo/jaguar-logo2.png" alt="..." width={100} height={100}></Image>
                    </div>
                </div>
            </div>
            {/* Bagian Footer tolong diperbaiki lagi  */}
        </div>
    );
};

export default AboutUs;
