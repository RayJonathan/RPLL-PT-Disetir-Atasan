import Image from "next/image"

const NewArrivals = () => {
    return(
        <div className="grid grid-cols-4 gap-4 h-59">
            <div className="bg-indigo-500">
                <Image src="https://placehold.co/600x400/png" alt="..." width={600} height={600}/>
                <h4>Acura TRX</h4>
                <p>2024</p>
                <h5>$ 45,245</h5>
            </div>
            <div className="bg-indigo-500">Grid2</div>
            <div className="bg-indigo-500">Grid3</div>
            <div className="bg-indigo-500">Grid4</div>
        </div>
    )
}

export default NewArrivals