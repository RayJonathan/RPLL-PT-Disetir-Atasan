"use client"

import React from "react";
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link";


const Page = () => {
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <FileSearch size={80}/>
                <h3 className="text-2xl font-bold pb-2">PAGE NOT FOUND</h3>
                <Link href="/" className="text-black hover:text-red-700 transition-all md:text-xl sm:text-lg text-lg">Back</Link>
            </div>
        </div>
    )
};

export default Page;
