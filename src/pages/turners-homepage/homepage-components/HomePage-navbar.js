import './HomePage-navbar.css'
import navbarlogo from '../homepage-components/homepage-images/navbarlogo.jpg'
import phoneicon from '../homepage-components/homepage-images/phoneicon.PNG'
import usericon from '../homepage-components/homepage-images/usericon.PNG'
import hamburgericon from '../homepage-components/homepage-images/hamburgericon.PNG'
import closemenuicon from '../homepage-components/homepage-images/closemenuicon.PNG'
import { useState, useEffect } from 'react';



export default function HomePage() {
    //functions to open and close hamburger menu
    const [showMenu, setShowMenu] = useState('noMenu')
    const handleClick = () => {
        setShowMenu('showMenu')
    }
    const handleClickBack = () => {
        setShowMenu('noMenu')
    }

    return (
        <>
            <div>
                {showMenu === "showMenu" &&
                    <div className="homepage-nav-body-full-screen">
                        <div className="homepage-nav-body-container">
                            <div className="homepage-nav-body-container-left">
                                <div className='homepage-nav-body-container-left-logo'>
                                    <img src={navbarlogo}
                                        alt="navbar logo"
                                        className="homepage-nav-body-container-left-logo-image">
                                    </img>
                                </div>
                            </div>
                            <div className="homepage-nav-body-container-right">
                                <div className="homepage-nav-body-container-right-item
                                homepage-nav-body-container-right-item-placeholder">
                                </div>

                                <img className="homepage-nav-body-container-right-item"
                                    src={phoneicon}
                                    alt="phone icon">
                                </img>
                                <img className="homepage-nav-body-container-right-item"
                                    src={usericon}
                                    alt="phone icon">
                                </img>
                                <img className="homepage-nav-body-container-right-item"
                                    src={closemenuicon}
                                    alt="phone icon"
                                    onClick={handleClickBack}>
                                </img>
                            </div>
                        </div>

                        <div className="homepage-nav-body-dropdown-menu">
                            <div className="homepage-nav-body-dropdown-menu-left"></div>
                            <div className="homepage-nav-body-dropdown-menu-right">
                                <div className='homepage-hamburger-menu-container'>

                                    <div className='homepage-hamburger-menu-container-item'>Buy a Car</div>
                                    <div className='homepage-hamburger-menu-container-item'>Sell a Car</div>
                                    <div className='homepage-hamburger-menu-container-item'>Finance</div>
                                    <div className='homepage-hamburger-menu-container-item'>Insurance</div>
                                    <div className='homepage-hamburger-menu-container-item'>Contanct</div>

                                </div>
                            </div>
                        </div>
                    </div>}



                {/* navbar without hamburger */}

                {showMenu === "noMenu" &&
                    <div className="homepage-nav-body-full-screen">
                        <div className="homepage-nav-body-container">
                            <div className="homepage-nav-body-container-left">
                                <div className='homepage-nav-body-container-left-logo'>
                                    <img src={navbarlogo}
                                        alt="navbar logo"
                                        className="homepage-nav-body-container-left-logo-image">
                                    </img>
                                </div>
                            </div>
                            <div className="homepage-nav-body-container-right">
                                <div className="homepage-nav-body-container-right-item
                                homepage-nav-body-container-right-item-placeholder">
                                </div>

                                <img className="homepage-nav-body-container-right-item"
                                    src={phoneicon}
                                    alt="phone icon">
                                </img>
                                <img className="homepage-nav-body-container-right-item"
                                    src={usericon}
                                    alt="phone icon">
                                </img>
                                <img className="homepage-nav-body-container-right-item"
                                    src={hamburgericon}
                                    alt="phone icon"
                                    onClick={handleClick}>
                                </img>
                            </div>
                        </div>
                    </div>}
            </div>
        </>
    )
}