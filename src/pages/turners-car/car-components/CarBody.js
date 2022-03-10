import './CarBody.css'
import insurancebanner from './car-images/insurancebanner.png'
import carbanner from './car-images/carbanner.jpg'
import thirdpartyfire from './car-images/thirdpartyfire.jpg'
import thirdpartyproperty from './car-images/thirdpartyproperty.jpg'
import crossicon from './car-images/crossicon.PNG'
import tickicon from './car-images/tickicon.PNG'

export default function CarBody() {
    return (
        <>
            <div className='car-body-top'>
                <div className='car-body-top-banner'>
                    <img
                        src={insurancebanner}
                        alt="insurance banner"
                        className='car-body-top-banner-image'>
                    </img>
                </div>
                <div className='car-body-top-text'>
                    <div className='car-body-top-text-heading'>Get Car Insurance from the car experts </div>
                    <div className='car-body-top-text-content'>Insurance for vehicles bought through us or not!</div>
                </div>
            </div>
            <div className='car-body-content-section'>
                <div className='car-body-content-banner'>
                    <img
                        src={carbanner}
                        alt="car banner">

                    </img>
                </div>
                <div className='car-body-content-heading'>Comprehensive Everyday Plus
                    Car Insurance</div>
                <div className='car-body-content-text'>
                    <div className='car-body-content-text-heading'>Cover your vehicle for accident, fire or theft and your liability for damage to other people’s property.</div>
                    <div className='car-body-content-text-title'>Features & Benefits</div>
                    <div className='car-body-content-text-list-container'>
                        <ul className='car-body-content-text-list'>
                            <li>1 year new for old car replacement</li>
                            <li>Lifetime guarantee on repairs we arrange</li>
                            <li>Personal property stolen / damaged in an incident involving your car(up to $500)</li>
                            <li>Replacement of stolen keys and recoding of locks(up to $1,000)</li>
                            <li>Hire car after theft of up to 14 days</li>
                        </ul>
                    </div>
                </div>
                <div className='car-body-content-policy'>
                    <a
                        className='car-body-content-policy-btn'
                        href='#'
                        alt="car-policy-btn"
                    >View Policy Document
                    </a>
                </div>
            </div>

            <div className='car-body-content-section'>
                <div className='car-body-content-banner'>
                    <img
                        src={thirdpartyfire}
                        alt="property banner">

                    </img>
                </div>
                <div className='car-body-content-heading'>Third Party, Fire & Theft
                    Car Insurance</div>
                <div className='car-body-content-text'>
                    <div className='car-body-content-text-heading'>Cover your vehicle for fire or theft and your liability to property. Not in the event of accident except by uninsured drivers.</div>
                    <div className='car-body-content-text-title'>Features & Benefits</div>
                    <div className='car-body-content-text-list-container'>
                        <ul className='car-body-content-text-list'>
                            <li>Transport cover</li>
                            <li>Replacement car cover</li>
                            <li>Damage by uninsured drivers</li>
                            <li>Emergency travel, accommodation</li>
                            <li>Personal property stolen / damaged in an incident involving your car (up to $500)</li>
                            <li>Hire car after theft</li>
                        </ul>

                    </div>
                </div>
                <div className='car-body-content-policy'>
                    <a
                        className='car-body-content-policy-btn'
                        href='#'
                        alt="car-policy-btn"
                    >View Policy Document
                    </a>
                </div>
            </div>

            <div className='car-body-content-section'>
                <div className='car-body-content-banner'>
                    <img
                        src={thirdpartyproperty}
                        alt="fire banner">

                    </img>
                </div>
                <div className='car-body-content-heading'>Third Party Property Damage Car Insurance</div>
                <div className='car-body-content-text'>
                    <div className='car-body-content-text-heading'>Cover your liability to property damage. This does not cover damage to your vehicle from an accident, except by uninsured drivers.</div>
                    <div className='car-body-content-text-title'>Features & Benefits</div>
                    <div className='car-body-content-text-list-container car-body-content-text-list-container-property'>
                        <ul className='car-body-content-text-list'>
                            <li>Transport cover</li>
                            <li>Replacement car cover</li>
                            <li>Damage by uninsured drviers</li>

                        </ul>
                    </div>
                </div>
                <div className='car-body-content-policy'>
                    <a
                        className='car-body-content-policy-btn'
                        href='#'
                        alt="car-policy-btn"
                    >View Policy Document
                    </a>
                </div>
            </div>
            <div className='car-body-comparison-container'>
                <div className='car-body-comparison-container-heading'>Comparison Table</div>
                <div className='car-body-comparison-container-titles'>
                    <div className='car-body-comparison-container-titles-left'></div>
                    <div className='car-body-comparison-container-titles-right'>
                        <div className='car-body-comparison-container-titles-comprehensive'>Comprehensive</div>
                        <div className='car-body-comparison-container-titles-fire'>Third Party,<br></br>
                            Fire & Theft</div>
                    </div>
                </div>
                <div className='car-body-comparison-container-table'>
                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>1 year new for old car replacement</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={crossicon}
                                alt="cross icon"
                            ></img>
                        </div>
                    </div>

                    {/* ------------------table item space--------------------- */}

                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>Lifetime guarantee on repairs we arrange</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                    </div>
                    {/* ------------------table item space--------------------- */}
                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>Replacement of stolen keys and recoding of locks (up to $1,000)</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={crossicon}
                                alt="cross icon"
                            ></img>
                        </div>
                    </div>
                    {/* ------------------table item space--------------------- */}
                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>Hire car after theft</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                    </div>
                    {/* ------------------table item space--------------------- */}
                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>Hire car after theft of up to 14 days</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={crossicon}
                                alt="cross icon"
                            ></img>
                        </div>
                    </div>
                    {/* ------------------table item space--------------------- */}
                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>Transport cover</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                    </div>
                    {/* ------------------table item space--------------------- */}
                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>Replacement car cover</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                    </div>
                    {/* ------------------table item space--------------------- */}
                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>Damage by uninsured drivers</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                    </div>
                    {/* ------------------table item space--------------------- */}
                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>Emergency travel, & accommodation</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                    </div>
                    {/* ------------------table item space--------------------- */}
                    <div className='car-body-comparison-container-table-item'>
                        <div className='car-body-comparison-container-table-text'>Personal property stolen / damaged in an incident involving your car (up to $500)</div>
                        <div className='car-body-comparison-container-table-comprehensive'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                        <div className='car-body-comparison-container-table-fire'>
                            <img
                                src={tickicon}
                                alt="tick icon"
                            ></img>
                        </div>
                    </div>
                    <div className='car-body-back-home-btn'>&#60;&nbsp; Back</div>
                </div>
                <div className='car-body-quote-container'>
                    <div className='car-body-quote-btn'>GET A QUOTE ONLINE</div>
                </div>
                <div className='car-body-consultant-container'>
                    <div className='car-body-consultant-btn'>Book a consultant</div>
                </div>
            </div>
        </>
    )
}

