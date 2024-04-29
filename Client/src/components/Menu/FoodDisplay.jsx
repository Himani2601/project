import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const foodDisplay = document.querySelector('.food-display');
            if (foodDisplay) {
                const foodDisplayTop = foodDisplay.getBoundingClientRect().top;
                setIsVisible(foodDisplayTop < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='mx-5 mb-10 md:mx-16 food-display'>
            <h2 className='mb-9 md:text-2xl font-mono font-semibold text-lg text-center'>- Top Dishes Near You -</h2>
            <div className={`flex flex-wrap ${isVisible ? 'animate-slide-in' : ''}`}>
                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return (
                            <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
