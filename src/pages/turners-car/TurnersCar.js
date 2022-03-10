import './TurnersCar.css'
import Navbar from "../turners-homepage/homepage-components/HomePage-navbar"
import CarBody from './car-components/CarBody'

export default function TurnersCar() {
    return (
        <div className='turners-car-body-container'>
            <Navbar />
            <CarBody />
        </div>
    )
}



