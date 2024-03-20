"use client"
import React from 'react'
import { useState } from "react"

const collectionButton = () => {
    //
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("")

    const handleInputEmail = (event) => {
        SetEmail(event.target.value)
    }

    const handleInputPassword = (event) => {
        SetPassword(event.target.value)
    }


    const handlePosting = async (event) => {
        event.preventDefault()
        const data = {email,password}
        console.log(data)
        const response = await fetch("/api/v1/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        })
    }

    return (
        <>
            <form className="w-675px p-8 rounded  ml-3 mt-16">
                <label className="block mb-4">
                    <span className="text-gray-700 font-bold">Email</span>
                    <input
                        onChange={handleInputEmail}
                        type="text"
                        className="mt-1 p-2 w-full border rounded"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700 font-bold">Password</span>
                    <input
                        onChange={handleInputPassword}
                        type="password"
                        className="mt-1 p-2 w-full border rounded"
                    />
                </label>
                <button
                    onClick={handlePosting}
                    type="submit"
                    className="bg-black text-white p-2 rounded-md w-full mt-3"
                >
                    Sign In
                </button>

                <p className="text-center mt-5">Don't have an account? <a href="http://localhost:3000/signup" className="font-bold underline">SIGN UP!</a></p>
            </form>
        </>

    )
}

export default collectionButton