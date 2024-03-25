"use client"
import React from 'react';
import CollectionButton from "@/app/signup/CollectionButton"
interface signup { }

const Signup: React.FC<signup> = (props) => {

    return (
        <div>
            <div className="flex-1 flex">
                <div className="flex-1 bg-blue-500">
                    <img
                        className="w-full h-full object-cover"
                        src="image1.png"
                        alt="Left Section Image"
                    />
                </div>

                <div className="flex-1 bg-gray-100  flex flex-col items-center justify-center">
                    <div className="text-black">
                        <div className="mt-16">
                            <h1 className=" text-center text-4xl font-bold">Create Account</h1>
                            <p className="mt-3">Follow the instructions to make it easier to register and you will be able to explore inside</p>
                        </div>
                    <CollectionButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
