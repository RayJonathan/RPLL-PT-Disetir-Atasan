// pages/dashboard.js
import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex bg-gray-200 min-h-screen">
            {/* Sidebar */}
            <div className="flex flex-col justify-between bg-header text-white h-screen w-1/6 p-4">
                <div>
                    {/* <div className="flex justify-center items-center mb-4">
                        <img
                            className="cursor-pointer"
                            src="Logo.png"
                            width={150}
                            height={150}
                            alt="Disetir Atasan Logo"
                        />
                    </div> */}
                    <div className="flex gap-3 text-lg font-semibold bg-header transition-all hover:bg-slate-400 hover:rounded-lg hover:pl-2 cursor-pointer">
                        <div className="w-6 h-6">
                            <img src="/Logo/grid-outline.svg" alt="grid" className="w-full h-full filter invert" />
                        </div>
                        Dashboard
                    </div>
                    <ul className=" text-base space-y-2 pl-9 mb-4">
                        <li>Analytics</li>
                        <li className="font-bold bg-slate-400 rounded-lg pl-2">Users</li>
                        <li>Orders</li>
                    </ul>
                    <div className="flex gap-3 text-lg font-semibold mb-4 bg-header transition-all hover:bg-slate-400 hover:rounded-lg hover:pl-2">
                        <Link href="/">
                            <div className="w-6 h-6">
                                <img src="/Logo/person-outline.svg" alt="person" className="w-full h-full filter invert" />
                            </div>
                        </Link>
                        <Link href="/">Profile</Link>
                    </div>
                    <div className="flex gap-3 text-lg font-semibold mb-4 bg-header transition-all hover:bg-slate-400 hover:rounded-lg hover:pl-2">
                        <Link href="/">
                            <div className="w-6 h-6">
                                <img src="/Logo/garage.png" alt="grid" className="w-full h-full" />
                            </div>
                        </Link>
                        <Link href="/">Showroom</Link>
                    </div>
                </div>
                {/* Logout */}
                <div className="flex gap-3 text-lg font-semibold mb-4 bg-header transition-all hover:bg-slate-400 hover:rounded-lg hover:pl-2">
                    <Link href="/">
                        <div className="w-6 h-6">
                            <img src="/Logo/log-out-outline.svg" alt="person" className="w-full h-full filter invert" />
                        </div>
                    </Link>
                    <Link href="/">Logout</Link>
                </div>
            </div>
            <div className="flex flex-col w-full m-4">
                {/* Breadcrumb */}
                <div className="text-gray-500 text-xl mb-4">
                    Dashboard / Users
                </div>

                {/* Main Content */}
                <div className="flex flex-col w-full">
                    <div className="p-4 bg-white rounded-lg shadow mb-4">
                        <span className="text-xl font-semibold mb-2">Users</span>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <div className="w-1/2">Ray Jonathan</div>
                                <div className="w-1/2">#1023019284800909P</div>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded transition-all hover:bg-header duration-700">
                                    Detail
                                </button>
                            </div>
                            {/* Repeat similar user entries */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
