import React from 'react'


const Navbar = () =>{
    let time = new Date()
    return(
        <nav className="navbar navbar-light bg-dark justify-content-between">
            <h2 className="text-light">Weather App</h2>
            <h2 className="form-inline text-light">{time.toLocaleTimeString()} </h2>
        </nav> 
    )
}

export default Navbar;