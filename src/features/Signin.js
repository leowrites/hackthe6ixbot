import React from 'react'
import { Outlet } from 'react-router-dom'

const Signin = () => {

    return (
        <>
            <Outlet />
            <div>Signin Page</div>
        </>
    );
}

export default Signin;