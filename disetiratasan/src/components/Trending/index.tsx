import Image from "next/image"

const Trending = () => {
    return(
        <>
            <div className="flex flex-col items-center justify-center text-center bg-gray-tren">
                <div className="p-5">
                    <h1 className="font-bold md:text-3xl sm:text-2xl text-2xl">TRENDING</h1>
                    <p>Ferarri Portofino M | V8 Engine </p>
                </div>
                <div className="items-center justify-center">
                    <Image className="md:pl-0 md:pr-1 pl-10 pr-10" src="/Trending/Ferarri-Trending.png" alt="..." width={500} height={500}></Image>
                </div>
                <div className="py-5 px-14 md:text-base sm:text-xs text-xs">
                    <p>The Ferrari Portofino M, which features the legendary ‘M’ suffix, for Modificata, in its name, is the evolution of the Ferrari Portofino. The new Prancing Horse 2+ spider boasts a slew of new technical and design features, most notably an 8-speed dual-clutch gearbox and a five-position Manettino, an absolute first for a Ferrari GT convertible. Every drive aboard the Ferrari Portofino M is a voyage of (re)discovery.</p>
                </div>
                <div className="mb-4 flex flex-row">
                    <button className="bg-white hover:bg-header hover:text-white font-bold md:py-3 sm:py-2 py-2 px-4 rounded-full md:w-56 sm:w-52 w-52 transition-all duration-700 ease-in-out border-2 border-red-700 hover:border-lime-700">
                        Build Your Own
                    </button>
                </div>
            </div>
        </>
    )
}

export default Trending