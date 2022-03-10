import './TurnersConstruction.css'
import Navbar from "../turners-homepage/homepage-components/HomePage-navbar"
import construction from './construction-images/construction.jpg'

export default function TurnersConstruction() {
    return (
        <>

            <div className='turners-construction-body-container'>
                <Navbar />
                <div className='turners-construction-body-container-text'>This page is under construction.</div>
                <div className='turners-construction-body-image-container'>
                    <img src={construction} alt="construction"></img>
                </div>
                <a
                    className='turners-construction-body-home'
                    alt="home btn"
                    href={'http://localhost:3000'}
                >Back Home</a>
            </div>
        </>
    )
}