"use client";

import Footer from "@/components/Utilities/Footer";
import Navbar from "@/components/Utilities/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const onClickUrl=(url:string)=>{
    router.push(url)
  }

  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}
