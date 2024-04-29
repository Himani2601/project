import React from 'react';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <>
            <div className='mx-5 mb-10 md:mx-16'>
                <h3 className='mb-9 md:text-2xl font-mono font-semibold text-lg text-center'>- Explore Our Menu -</h3>
                <div className='flex justify-between items-center gap-8 overflow-x-auto' style={{ scrollbarWidth: 'none' }}>
                    {menu_list.map((item, index) => {
                        return (
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='text-center hover:cursor-pointer'>
                                <img src={item.menu_image} style={{ maxWidth: '120px', maxHeight: '120px' }} className={category === item.menu_name ? "border-[5px] rounded-full border-yellow-300" : "rounded-full"} />
                                <p className='mt-3 text-lg font-semibold'>{item.menu_name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <hr className='border-b border-gray-700 mb-10 md:mx-14 mx-5' />
        </>
    );
};

export default ExploreMenu;
