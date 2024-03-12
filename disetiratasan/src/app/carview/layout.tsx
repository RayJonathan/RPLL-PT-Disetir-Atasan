"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const onClickUrl=(url:string)=>{
    router.push(url)
  }

  return (
    <div>
      <header className="bg-header py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
              <img
                onClick={()=>onClickUrl('/home')}
                className="cursor-pointer"
                src="Logo.png"
                width={100}
                height={100}
                alt="Disetir Atasan Logo"
              />
            <div className="border-l border-white h-14 ml-4"></div>
            <nav className="ml-4">
              <ul className="flex space-x-4">
                <li className="text-white hover:text-gray-300 cursor-pointer" onClick={()=>onClickUrl('/home')}>
                    Home
                </li>
                <li className="text-white hover:text-gray-300 cursor-pointer" onClick={()=>onClickUrl('/vehicle')}>
                    Vehicles
                </li>
                <li className="text-white hover:text-gray-300 cursor-pointer" onClick={()=>onClickUrl('/about')}>
                    About Us
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-white hover:text-gray-300 cursor-pointer" onClick={()=>onClickUrl('/login')}>
              Login
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}