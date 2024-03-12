import Image from "next/image";


export default function Hover() {
    return(
        <>
            <div className="aspect-w-16 aspect-h-9 relative">
                <Image className="object-cover w-full md:h-96 h-screen" src="/hover-home-page.avif" alt="..." width={600} height={600}></Image>
                <div className="md:absolute sm:relative absolute md:top-10 sm:top-0 top-0 right-0 w-full md:w-1/2 md:h-3/5 sm:h-1/2 bg-black bg-opacity-55 text-white p-5 md:text-xl sm:text-xs text-xl">
                    <p>Welcome to Disetir Atasan</p>
                    <br/>
                    <p>We believe that your car is more than just a mode of transportation: it's an extension of your personality and style. Elevate your driving experience with our expertly crafted and uniquely customized cars</p>
                </div>
            </div>
        </>
    );
}
