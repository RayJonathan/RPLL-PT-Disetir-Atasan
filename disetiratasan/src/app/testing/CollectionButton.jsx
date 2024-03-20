"use client"
import { sign } from 'crypto'
import React from 'react'
import { useState } from "react"

const collectionButton = () => {

    const [isCreated,setIsCreated] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleInputPassword=(event) =>{
        setPassword(event.target.value)
    }

  
    const handleInputChange = (event) => {
        setEmail(event.target.value)
     };

    const handlePosting = async (event) =>{

        event.preventDefault()
        const data = {email,password}
        console.log(data)
        const response = await fetch("/api/v1/signup", {
            method:"POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
             
        const postAccount = await response.json()
        if(postAccount.isCreated){
            setIsCreated(true)
        }
        console.log("Email : " , email)
        console.log("Password : " , password)
    } 

    return (
      <>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Email</span>
          <input
            onChange={handleInputChange}
            id="email"
            type="text"
            className="mt-1 p-2 w-full border rounded" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold"></span>
          <input
            onChange={handleInputPassword}
            id="password"
            type="password"
            className="mt-1 p-2 w-full border rounded" />
        </label>
    <button onClick={handlePosting} type="submit"  className="bg-black text-white p-2 rounded-md w-full mt-3"> Sign Up </button>
            </>
  )
}

export default collectionButton