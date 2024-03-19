import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center justify-center'>
                <div className='menu-dropdown flex'>
                    <li className='dropdown p-2 w-60 border rounded'>Menu
                        <ul className='isi-dropdown'>
                            <li><a href='#' className='w-60'>Accident/Injury</a></li>
                            <li><a href='#' className='w-60'>Dealer Experience</a></li>
                            <li><a href='#' className='w-60'>Other</a></li>
                            <li><a href='#' className='w-60'>Parts</a></li>
                            <li><a href='#' className='w-60'>Roadside Assistance</a></li>
                            <li><a href='#' className='w-60'>Vehicles</a></li>
                            <li><a href='#' className='w-60'>Vehicle Service Contact</a></li>
                        </ul>
                    </li>
                </div>
                <div className='flex flex-auto'>
                    <form className="w-675px p-8 rounded  ml-80 mt-16">

                        <label className="flex flex-row grid-rows-2">
                            <div className="flex items-center w-40">
                                <span className="text-gray-700 font-bold">First Name </span>
                            </div>
                            <input
                                type="text"
                                className="ml-10 mt-1 p-2 w-60 border rounded"
                            />
                        </label>

                        <label className="flex flex-row grid-rows-2">
                            <div className="flex items-center w-40">
                                <span className="text-gray-700 font-bold">Last Name </span>
                            </div>
                            <input
                                type="text"
                                className="ml-10 mt-1 p-2 w-60 border rounded"
                            />
                        </label>

                        <label className="flex flex-row grid-rows-2">
                            <div className="flex items-center w-40">
                                <span className="text-gray-700 font-bold">Email </span>
                            </div>
                            <input
                                type="text"
                                className="ml-10 mt-1 p-2 w-60 border rounded"
                            />
                        </label>

                        <label className="flex flex-row grid-rows-2">
                            <div className="flex items-center w-40">
                                <span className="text-gray-700 font-bold">Phone Number </span>
                            </div>
                            <input
                                type="text"
                                className="ml-10 mt-1 p-2 w-60 border rounded"
                            />
                        </label>

                        <label className="flex flex-row grid-rows-2">
                            <div className="flex items-center w-40">
                                <span className="text-gray-700 font-bold">Zip code </span>
                            </div>
                            <input
                                type="text"
                                className="ml-10 mt-1 p-2 w-60 border rounded"
                            />
                        </label>
                        <label className="flex flex-row grid-rows-2">
                            <div className="flex items-center w-40">
                                <span className="text-gray-700 font-bold">VIN </span>
                            </div>
                            <input
                                type="text"
                                className="ml-10 mt-1 p-2 w-60 border rounded"
                            />
                        </label>
                        <label className="flex flex-row grid-rows-2">
                            <div className="flex w-40">
                                <span className="text-gray-700 font-bold">Description </span>
                            </div>
                            <textarea
                                className="ml-10 mt-1 p-2 w-60 h-40 border rounded resize-none"
                                placeholder="Enter description..."
                            ></textarea>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}
