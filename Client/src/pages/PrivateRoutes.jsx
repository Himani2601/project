import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

export default function PrivateRoute() {

    const { user } = useContext(StoreContext);

    return user ?
        <div>
            <Outlet />
        </div> : <Navigate to='/signin' />;
}
