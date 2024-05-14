import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);
    const [food_list, setFood_List] = useState([]);
    const [search, setSearch] = useState('');
    const [user, setUser] = useState(() => {
        // Retrieve user information from localStorage upon component initialization
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        // Store user information in localStorage whenever it changes
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const updateUser = (user) => {
        setUser(user);
    }

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const emptyCart = () => {
        setCartItems({});
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    // Update to set user information upon login
    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const contextValue = {
        food_list,
        cartItems,
        updateUser,
        search,
        setSearch,
        addToCart,
        setFood_List,
        selectedItem,
        setSelectedItem,
        setCartItems,
        removeFromCart,
        getTotalCartAmount,
        emptyCart,
        user,
        login,
        logout,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
