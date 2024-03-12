import Image from "next/image";


export default function Hover() {
    return(
        <>
            <div className="aspect-w-16 aspect-h-9">
                <Image className="object-cover w-full md:h-96 h-sceen" src="/hover-home-page.avif" alt="..." width={600} height={600}></Image>
            </div>
        </>
    );
}
