import './HomePage-body.css'
import homebanner from '../homepage-components/homepage-images/homebanner.jpg'
import sellcar from '../homepage-components/homepage-images/sellcar.jpg'
import buycar from '../homepage-components/homepage-images/buycar.jpg'
import insurance from '../homepage-components/homepage-images/insurance.jpg'
import finance from '../homepage-components/homepage-images/finance.jpg'



export default function HomePageBody() {
    return (
        <>
            <div className="homepage-body-banner-container">
                <img
                    src={homebanner}
                    alt="home banner"
                    className="homepage-body-banner-container-banner"
                >
                </img>
            </div>
            <div className="homepage-body-content-container">
                <div className="homepage-body-content-container-text">
                    <div className="homepage-body-content-container-text-title">Need a Car? Buy with confidence.</div>
                    <div className="homepage-body-content-container-text-paragraph">Turners Cars is the largest used car network in New Zealand. With a huge range of around 3,000 cars for sale there is truly something for everyone. And if you want car finance or car insurance, we can sort that out for you as well. </div>
                    <div className="homepage-body-content-container-text-contact">Contact Us on 0800 887 637.</div>
                </div>
            </div>
            <div className="homepage-body-page-links-container">
                <div className="homepage-body-page-links-container-top">
                    <div className="homepage-body-page-links-container-top-left">
                        <a
                            className='homepage-body-page-links-container-construction-link'
                            href="http://localhost:3000/construction"
                            alt="insurance link">&nbsp;</a>
                        <div className="homepage-body-page-links-text-overlay">BUY<br></br> A CAR</div>
                        <img
                            src={buycar}
                            alt="linkimage"
                            className="homepage-body-page-links-image">
                        </img>
                    </div>
                    <div className="homepage-body-page-links-container-top-right">
                        <a
                            className='homepage-body-page-links-container-construction-link'
                            href="http://localhost:3000/construction"
                            alt="insurance link">&nbsp;</a>
                        <div className="homepage-body-page-links-text-overlay">SELL<br></br> A CAR</div>
                        <img
                            src={sellcar}
                            alt="linkimage"
                            className="homepage-body-page-links-image">
                        </img>
                    </div>
                </div>



                <div className="homepage-body-page-links-container-bottom">
                    <div className="homepage-body-page-links-container-bottom-left">
                        <a
                            className='homepage-body-page-links-container-construction-link'
                            href="http://localhost:3000/construction"
                            alt="insurance link">&nbsp;</a>
                        <div className="homepage-body-page-links-text-overlay">FINANCE</div>
                        <img
                            src={finance}
                            alt="linkimage"
                            className="homepage-body-page-links-image">
                        </img>
                    </div>
                    <div className="homepage-body-page-links-container-bottom-right">
                        <a
                            className='homepage-body-page-links-container-insurance-link'
                            href="http://localhost:3000/insurance"
                            alt="insurance link">&nbsp;</a>
                        <div className="homepage-body-page-links-text-overlay">INSURANCE</div>
                        <img
                            src={insurance}
                            alt="linkimage"
                            className="homepage-body-page-links-image">
                        </img>
                    </div>
                </div>
            </div>
        </>
    )
}