import React from 'react'
import { Outlet } from 'react-router-dom'

const Advisor = () => {

    return (
        <>
            <Outlet />
            <div>Advisor Page Page</div>
        </>
    );
}

export default Advisor;