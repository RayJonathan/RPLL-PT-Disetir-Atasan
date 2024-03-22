import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex w-auto h-screen bg-gray-100 flex-row justify-center'>
                <div className="text-left md:text-lg sm:text-xs text-xs mt-26">
                    <b className='ml-10'>Topic </b>
                    <select className="inline-block bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer">
                        <option>Accident/Injury</option>
                        <option>Dealer Experience</option>
                        <option>Other</option>
                        <option>Parts</option>
                        <option>Roadside Assistance</option>
                        <option>Vehicles</option>
                        <option>Vehicle Service Contact</option>
                    </select>
                    
                </div>
                <div className='flex flex-auto'>
                    <form className="w-auto p-8 rounded mt-16 ml-2">
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
                    <button type="submit" className="bg-header text-white rounded-md mt-10 w-32 h-8 ml-80"><b>Submit</b>
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
