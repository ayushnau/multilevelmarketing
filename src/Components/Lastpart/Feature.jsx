import React from 'react'
import './feature.css'
import tag from '../static/tag.png'

const Feature = () => {
    return (
        <>
        <div className="featuremaster">
            <div className="featureheading"></div>
            <div className="featuregrid">
                <div className="featurecard">
                    <div className="featurecardicon" style={{ backgroundColor: '#677294' }}>
                        <i className="fa fa-user fa-4x"></i>
                    </div>
                    <div className="featurecardheading">Leadership</div>
                    <div className="featurecardpara">We extensively work with our people so that they can reach their highest potential by helping them become powerful leaders.</div>
                </div>
                <div className="featurecard">
                    <div className="featurecardicon" style={{ backgroundColor: '#5CBD2C' }}>
                    <i className="fas fa-file-invoice fa-4x
                    "></i>
                    </div>
                    <div className="featurecardheading">Education</div>
                    <div className="featurecardpara">
                        We educate ourself and our people so that we can become the best in every aspect of our lives.</div>
                </div>
                <div className="featurecard">
                    <div className="featurecardicon" style={{ backgroundColor: '#F38650' }}>
                    <i className="fa fa-file fa-4x" aria-hidden="true"></i>
                    </div>
                    <div className="featurecardheading">Authenticity</div>
                    <div className="featurecardpara">
                        We dont believe in shortcuts when it comes to legal responsibilities. Being authentic is the foremost priority to conduct our business.</div>
                </div>
                <div className="featurecard">
                    <div className="featurecardicon" style={{ backgroundColor: '#ECBF24' }}>
                    <i className="fas fa-phone fa-4x"></i>
                    </div>
                    <div className="featurecardheading">Support</div>
                    <div className="featurecardpara">
                        With our industry leading customer relationship management system we promise to provide the best care for everyone who becomes a part of Evoke.</div>
                </div>
                <div className="featurecard">
                    <div className="featurecardicon" style={{ backgroundColor: '#FA4C9A' }}>
                    <i className="fa fa-lock fa-4x" aria-hidden="true"></i>
                    </div>
                    <div className="featurecardheading">Integrity</div>
                    <div className="featurecardpara">
                        If it is not true then we don't say it, if it is not right we don't do it. We believe in doing the right thing even if it doesn't matter.</div>
                </div>
                <div className="featurecard">
                    <div className="featurecardicon" style={{ backgroundColor: '#35BFE7' }}>
                    <i className="fa fa-shield fa-4x" aria-hidden="true"></i>
                    </div>
                    <div className="featurecardheading">Security</div>
                    <div className="featurecardpara">
                        We all want security for the present and the future of our family, and Evoke provides it by its most versatile business opportunity</div>
                </div>
            </div>
        </div>

        {/* second part */}
        <div className="contactmaster">
            <div className="contactform">
                <div className="contacttag">
                    <img src={tag} alt="tagpic" />
                </div>
                <div className="contactname">
                    <span className="contactbold">Name:-</span> 
                    Rishabh Langer
                </div>
                <div className="contactnumber">
                    <span className="contactbold">Number:-</span>
                    7006852763
                </div>
                <div className="contactemail">
                    <span className="contactbold">Email:-</span>
                    rishablanger29@gmail.com
                </div>
                <div className="contactofficer">
                GRIEVANCE OFFICER
                </div>
            </div>
            <div className="contactform">
                <div className="contacttag">
                    <img src={tag} alt="tagpic" />
                </div>
                <div className="contactname">
                    <span className="contactbold">Name:-</span> 
                    Ajay Yadav
                </div>
                <div className="contactnumber">
                    <span className="contactbold">Number:-</span>
                    7895345720
                </div>
                <div className="contactemail">
                    <span className="contactbold">Email:-</span>
                    ajay9555yadav@gmail.com
                </div>
                <div className="contactofficer">
                NODAL OFFICER
                </div>
            </div>
        </div>
        </>
    )
}

export default Feature