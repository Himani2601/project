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
            <div className="custom-shape-divider-bottom-1712569784 absolute bottom-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180" style={{ bottom: 0, left: 0 }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(121% + 1.3px)] md:h-14 md:w-[100%] h-[72px]"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        className="shape-fill"
                        fill="#FFFFFF"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        className="shape-fill"
                        fill="#FFFFFF"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="shape-fill"
                        fill="#FFFFFF"
                    ></path>
                </svg>
            </div>
        </section>
    )
}

export default Banner