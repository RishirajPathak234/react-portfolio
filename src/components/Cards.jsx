import React from 'react'

const Cards = ({ item }) => {
    return (
        <div className='border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50'>
            <img src={item.image} alt="" className='rounded-lg' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    {/* Always show "Live Preview" button except for "Automatic Fire Extinguisher For EVs" */}
                    {item.title !== "Automatic Fire Extinguisher For EVs" && (
                        <button className='bg-red-500 text-white px-3 py-2 rounded-md'>
                            <a href={item.live} target='_blank' rel="noopener noreferrer">
                                Live Preview
                            </a>
                        </button>
                    )}
                    {item.title !== "Automatic Fire Extinguisher For EVs" && (
                        <button className='bg-black text-white px-3 py-2 rounded-md'>
                            <a href={item.github} target='_blank' rel="noopener noreferrer" className='flex gap-1'>
                                <img src={Github} alt="GitHub" className='w-7 bg-black' />
                                Github Link
                            </a>
                        </button>
                    )}

                    {/* Show "More About" only for the specified card */}
                    {item.title === "Automatic Fire Extinguisher For EVs" && (
                        <button className='bg-black text-white px-3 py-2 rounded-md'>
                            <a href={item.more} target='_blank' rel="noopener noreferrer" className='flex gap-1'>
                                <img src="#" alt="" className='#' />
                                Learn More
                            </a>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cards
