import React from 'react'



const LogoClick = () => {
    return(
        window.location.href = 'http://localhost:3000/'    
    )
}






const Navbar = () => {
    return(

    <div className="navbarouter">
        <div className="navbar">
            <img className="logo" onClick={LogoClick} src="https://assets.zyrosite.com//Aq2xk2nr7Bsq6k12/Niko-logo-YD0Z86WOZ7FQg38b.svg"></img>    
            <div className="linksnav">
                <a href="#">MY WORKS</a>
                <a href="#">CONTACT ME</a>
            </div>
        </div>
    </div>
)
}

export default Navbar;