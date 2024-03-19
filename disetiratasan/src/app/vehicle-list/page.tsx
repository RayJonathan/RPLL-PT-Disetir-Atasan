import Image from "next/image"

const Vehicle = () => {
    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <p className="text-center pt-5 m-3 font-bold md:text-3xl sm:text-xl text-xl">All Vehicles</p>
                <p className=" md:px-10 sm:px-5 px-5 text-center">Discover exclusive promotions on the latest range of premium sedans, coupes, SUVs, wagons, convertibles, roadsters, hybrids, and electric vehicles available for purchase.</p>
            </div>
            <div className="border border-black bg-black md:mx-8 sm:mx-5 mx-5 my-2"></div>
            <div className="flex flex-row justify-center mb-3 gap-8">
                <Image src="/Logo/mercedes-logo.png" alt="..." width={60} height={60}></Image>
                <Image src="/Logo/ferarri-logo.png" alt="..." width={60} height={60}></Image>
                <Image src="/Logo/jaguar-logo.png" alt="..." width={60} height={60}></Image>
            </div>
            <div className="">

            </div>
        </>
    )
}

export default Vehicle