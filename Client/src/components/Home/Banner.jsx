import React from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="banner relative h-screen overflow-hidden bg-cover bg-center flex justify-center items-center m-2" >
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="banner-content text-center text-white flex flex-col justify-center">
                <h1 className="text-5xl font-medium tracking-wider mb-8 text-black">Welcome To <span className='px-2 py-1 bg-gradient-to-r from-orange-500 from-30% via-sky-500 via-50% to-emerald-500 to-90% rounded-lg inline-block text-transparent bg-clip-text'>Food Space</span></h1>
                <h3 className="text-xl font-semibold mb-12 border-b border-gray-400 pb-2 ml-4 mr-4 text-black">
                    We deliver not to "Escape Hunger", but for Flavor not to "Escape Us".
                </h3>
                <Link to="#">
                    <button
                        className="self-center hover:bg-gradient-to-r from-pink-500 to-indigo-500 hover:text-white md:w-[23%] w-[40%] rounded-sm text-black h-9"
                        variant="outlined"
                        sx={{
                            borderWidth: '2px',
                            borderColor: 'white',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Explore More
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Banner