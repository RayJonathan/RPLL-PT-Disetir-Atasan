import Image from "next/image"

const NewArrivals = () => {
    return (
        <>
            <div className="shadow-xl bg-gray-new">
                <Image id="new-arrival" priority={true} className="p-2" src="/NewArrivals/FerarriDaytona.jpg" alt="..." width={600} height={600} />
                <div className="m-3">
                    <p className="font-bold md:text-xl text-lg">Ferarri Daytona</p>
                    <p className="font-bold">2024</p>
                    <p className="text-sm pl-3 pr-1 pt-1">Stunning bodywork, a 9500-rpm redline, blistering performance.</p>
                </div>
            </div>
            <div className="shadow-xl bg-gray-new">
                <Image id="new-arrival" priority={true} className="p-2" src="/NewArrivals/FerarriRoma.jpg" alt="..." width={600} height={600} />
                <div className="m-3">
                    <p className="font-bold md:text-xl text-lg">Ferarri Roma</p>
                    <p className="font-bold">2024</p>
                    <p className="text-sm pl-3 pr-1 pt-1">Beautiful design, more spacious than it looks, now available as a convertible.</p>
                </div>
            </div>
            <div className="shadow-xl bg-gray-new">
                <Image id="new-arrival" priority={true} className="p-2" src="/NewArrivals/Mercedes-AMG.jpg" alt="..." width={600} height={600} />
                <div className="m-3">
                    <p className="font-bold md:text-xl text-lg">Mercedes-AMG C63</p>
                    <p className="font-bold">2024</p>
                    <p className="text-sm pl-3 pr-1 pt-1">Poised handling, rocket-like acceleration, shockingly civil when cruising.</p>
                </div>
            </div>
            <div className="shadow-xl bg-gray-new">
                <Image id="new-arrival" priority={true} className="p-2" src="/NewArrivals/JaguarXF.jpg" alt="..." width={600} height={600} />
                <div className="m-3">
                    <p className="font-bold md:text-xl text-lg">Jaguar XF</p>
                    <p className="font-bold">2024</p>
                    <p className="text-sm pl-3 pr-1 pt-1">High-end interior, supple suspension than many mid-size luxury rivals.</p>
                </div>
            </div>
        </>
    )
}

export default NewArrivals