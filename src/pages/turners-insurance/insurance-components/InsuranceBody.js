import './InsuranceBody.css'
import Navbar from '../../turners-homepage/homepage-components/HomePage-navbar'
import insurancebanner from './insurance-images/insurancebanner.png'
import breakdown from './insurance-images/breakdown.jpg'
import car from './insurance-images/car.jpg'
export default function InsuranceBody() {

    return (
        <>
            <Navbar />
            <div className='insurance-body-container'>
                <div className='insurance-body-container-top'>
                    <div className='insurance-body-container-top-banner'>
                        <img
                            src={insurancebanner}
                            alt="insurance banner"
                            className='insurance-body-container-top-banner-image'>
                        </img>
                    </div>
                    <div className='insurance-body-container-top-text'>
                        <div className='insurance-body-container-top-text-heading'>We’ve Got You Covered</div>
                        <div className='insurance-body-container-top-text-content'>There are <span className='insurance-body-container-top-text-content-bold'>two main types </span>of motor vehicle insurance</div>
                    </div>
                </div>
                <div className='insurance-body-container-middle'>
                    <div className='insurance-body-container-middle-breakdown'>
                        <div className="insurance-body-container-middle-breakdown-image">
                            <img
                                src={breakdown}
                                alt="breakdown">
                            </img>
                        </div>
                        <div className="insurance-body-container-middle-breakdown-image-text">
                            <div className="insurance-body-container-middle-breakdown-text-top">Mechanical Breakdown
                                Insurance</div>
                            <div className="insurance-body-container-middle-breakdown-text-middle">Insurance This insurance protects you against sudden and unforeseen failure of a wide range of mechanical and electrical parts.</div>
                            <div className="insurance-body-container-middle-breakdown-text-bottom"><div>See More <span className='insurance-body-container-middle-text-bottom-btn'> ></span></div></div>
                        </div>

                    </div>
                    <div className='insurance-body-container-middle-car'>
                        <div className="insurance-body-container-middle-car-image">
                            <img
                                src={car}
                                alt="car">
                            </img>
                        </div>
                        <div className="insurance-body-container-middle-car-image-text">
                            <div className="insurance-body-container-middle-car-text-top">Car Insurance</div>
                            <div className="insurance-body-container-middle-car-text-middle">We have 3 types of car insurance with great benefits and features to alleviate your financial burden if you are in an accident.</div>
                            <div className="insurance-body-container-middle-car-text-bottom"><div>See More <span className='insurance-body-container-middle-text-bottom-btn'> ></span></div></div>
                        </div>
                    </div>
                </div>





                <div className='insurance-body-container-bottom'>
                    <div className='insurance-body-container-bottom-home-btn'><div><span className='insurance-body-container-bottom-home-btn-arrow'> &#60;&nbsp;</span></div> Back to Home</div>
                </div>
            </div>

        </>
    )
}