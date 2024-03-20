"use client"
import React from 'react'
import { useState } from "react"

const collectionButton = () => {
//
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [userType, setUserType] = useState("")

  const handleInputFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const handleInputLastName = (event) => {
    setLastName(event.target.value)
  }
  const handleInputPassword = (event) => {
    setPassword(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleInputCity = (event) => {
    setCity(event.target.value);
  };
  const handleInputPhone = (event) => {
    setPhone(event.target.value);
  }
  const handleInputRegion = (event) => {
    setRegion(event.target.value);
  };
  const handleInputCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleInputZipcode = (event) => {
    setZipcode(event.target.value);
  };


  const handlePosting = async (event) => {
    event.preventDefault()
    const data = { email, password, firstname, lastname, phone, country, region, city, address, zipcode }
    console.log(data)
    const response = await fetch("/api/v1/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    console.log(response.json())
   
    console.log("lastname : ", lastname)
  }

  return (
    <>
      <form className="w-675px p-8 rounded  ml-3 mt-16">
        <div className="flex flex-wrap -mx-3">
          <div className="w-1/2 px-3 mb-4">
            <label className="block">
              <span className="text-gray-700 font-bold">First Name</span>
              <input
                onChange={handleInputFirstName}
                type="text"
                className="mt-1 p-2 w-full border rounded"
              />
            </label>
          </div>
          <div className="w-1/2 px-3 mb-4">
            <label className="block">
              <span className="text-gray-700 font-bold">Last Name</span>
              <input
                onChange={handleInputLastName}
                type="text"
                className="mt-1 p-2 w-full border rounded"
              />
            </label>
          </div>
        </div>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Email</span>
          <input
            onChange={handleEmail}
            id="email"
            type="text"
            className="mt-1 p-2 w-full border rounded" />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Phone Number</span>
          <input
            onChange={handleInputPhone}
            type="text"
            className="mt-1 p-2 w-full border rounded" />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Address</span>
          <input
            onChange={handleInputAddress}
            type="text"
            className="mt-1 p-2 w-full border rounded" />
        </label>
        <div className="flex flex-wrap -mx-3">
          <div className="w-1/2 px-3 mb-4">
            <label className="block">
              <span className="text-gray-700 font-bold">City</span>
              <input
                onChange={handleInputCity}
                type="text"
                className="mt-1 p-2 w-full border rounded"
              />
            </label>
          </div>
          <div className="w-1/2 px-3 mb-4">
            <label className="block">
              <span className="text-gray-700 font-bold">Region</span>
              <input
                onChange={handleInputRegion}
                type="text"
                className="mt-1 p-2 w-full border rounded"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-1/2 px-3 mb-4">
            <label className="block">
              <span className="text-gray-700 font-bold">Zipcode</span>
              <input
                onChange={handleInputZipcode}
                type="text"
                className="mt-1 p-2 w-full border rounded"
              />
            </label>
          </div>
          <div className="w-1/2 px-3 mb-4">
            <label className="block">
              <span className="text-gray-700 font-bold">Country</span>
              <input
                onChange={handleInputCountry}
                type="text"
                className="mt-1 p-2 w-full border rounded"
              />
            </label>
          </div>
        </div>


        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Password</span>
          <input
            onChange={handleInputPassword}
            type="password"
            className="mt-1 p-2 w-full border rounded" />
        </label>

        <button onClick={handlePosting} type="submit" className="bg-black text-white p-2 rounded-md w-full mt-3"> Sign Up </button>
      </form>
      <p className="text-center mt-5">Already have an account? <a href="http://localhost:3000/login" className="font-bold underline">LOGIN!</a></p></>

  )
}

export default collectionButton