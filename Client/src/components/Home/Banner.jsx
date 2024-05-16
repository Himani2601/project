import React from 'react'
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/Food.jpg';

const Banner = () => {
    return (
        <section className="banner relative h-screen overflow-hidden bg-cover bg-center flex justify-center items-center mt-16">
            <img src={backgroundImage} className="absolute z-0 inset-0 mx-auto my-auto w-[90vw] h-[90vh] object-cover rounded-xl" />
            <div className="banner-content text-center text-white flex flex-col justify-center items-center sm:w-[80vw] lg:w-[65vw] backdrop-filter backdrop-blur-sm bg-gray-600 bg-opacity-50 rounded-lg shadow-md px-6 w-[80vw] h-[70vh] sm:h-[50vh] animate-fade-in">
                <h1 className="text-6xl font-medium tracking-wider mb-8 text-black">Welcome To <span className='px-2 py-1 bg-gradient-to-r from-orange-500 from-30% via-sky-500 via-50% to-emerald-500 to-90% rounded-lg inline-block text-transparent bg-clip-text' style={{ fontVariant: 'unicase' }}>Food Space</span></h1>
                <h3 className="text-xl font-semibold mb-12 border-b border-gray-400 pb-2 ml-4 mr-4 text-white">
                    We deliver not to "Escape Hunger", but for Flavor not to "Escape Us".
                </h3>
                <Link to="#">
                    <button
                        className="self-center hover:bg-gradient-to-r from-pink-500 to-indigo-500 hover:text-white sm:w-[20vw] w-[35vw] rounded-md md:text-black h-9 border-2 text-white border-indigo-600 lg:w-[12vw]"
                        variant="outlined"
                        sx={{
                            borderWidth: '2px',
                            borderColor: 'white',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        - Explore More -
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Banner
