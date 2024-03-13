import Image from "next/image"

const BuildCustom = () => {
    return(
        <>
            <div className="flex flex-col items-center justify-center bg-gray-new shadow-lg">
                <p className="text-center pt-5 m-3 font-bold text-2xl">BUILD & CUSTOMIZE YOUR CAR</p>
                <br/>
                <div className="flex md:flex-row sd:flex-col flex-col md:text-lg sm:text-basic text-basic mb-10 md:mx-4">
                    <p className="md:m-2 text-center item-center justify-center md:text-left md:pt-24 md:pr-24"><b>Picking Your Car, Model, & Trim</b><br/><span className="md:text-base sm:text-base">Buying your next car means more than committing to another daily commuter. Your car speaks volumes about you - it's about self-expression, showcasing your sense of style, personality and taking the exciting next steps on a new adventure. Browse your car, SUV or EV models using the digital car configurator tool and select the one that best suits your requirements.</span></p>
                    <Image className="md:pl-0 md:pr-1 pl-10 pr-10" src="/BuildCustomize-HomePage/jaguar-side.png" alt="..." width={500} height={500}></Image>
                </div>
                <div className="mt-3 flex md:flex-row sm:flex-col flex-col md:text-lg sm:text-base text-base md:mx-4">
                    <Image className="md:pl-10 pl-20 md:mb-0 sm:mb-2 mb-2" src="/BuildCustomize-HomePage/jaguar-front.png" alt="..." width={280} height={280}></Image>
                    <p className="md:m-2 text-center item-center justify-center md:text-right md:pl-24"><b>Customize Your Vehicle With Equipment and Accessories</b><br/><span className="md:text-base sm:text-base">Your next car isn't complete without that personal touch. Our build & price tool is designed to make customizing your car with equipment and accessories as simple as possible. From matching your lifestyle requirements to sticking to your budget, our digital car configurator helps to make your next dream car truly yours.</span></p>
                </div>
            </div>
        </>
    )
}

export default BuildCustom