import React from 'react'

export function Portal() {

    const openPopUp = () => {
        window.open(getDomain() + "/api/auth/authorization")
    }


    function getDomain() {
        if (process.env.NODE_ENV === "production") return window.location.origin;
        return "http://localhost:3030";
    }
    return (
        <div className='portal'>
            <button onClick={openPopUp}>open auth</button>
        </div>
    )
}
