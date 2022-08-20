import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <Outlet />
            <div>Home Page</div>
        </>
    );
}

export default Home;