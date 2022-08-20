import React from 'react'
import { Outlet } from 'react-router-dom'

const Question = () => {

    return (
        <>
            <Outlet />
            <div>Question Page</div>
        </>
    );
}

export default Question;