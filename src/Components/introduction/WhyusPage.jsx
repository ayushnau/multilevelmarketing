import React from 'react'
import './Whyuspage.css'
import care from '../static/care.jpg'

const WhyusPage = () => {
    return (
        <>
            <div className="Whyuscontainer">

                <div className="Whyusheading">
                    Why Evoke
                </div>
                <div className="Whyuspara">
                    Evoke happened because of the inner calling. We believe this is the easiest time to create massive wealth and success yet the toughest time to understand, respect and value opportunity. Evoke is a tribe, a community of people who welcomes those who are not comfortable being average.
                </div>
                <div className="Whyuspara">
                    We came into existence because we were greatly committed to the process and to the people who really want to make the best out of their lives. We have laid a strong foundation that is cemented from trust, integrity, honesty, loyalty, commitment that is beyond measure.
                </div>
                <div className="Whyuspara">
                    At Evoke we highly value and understand the importance of opportunist people. We are looking for dreamers, believers, people who are not happy being ordinary and people who want to write their fate with their own hands.
                </div>
                <div className="Whyuspara">
                We welcome you at Evoke.
                 </div>
            </div>
            <div className="carecontainer">
                <img src={care} alt="careimage" />
            </div>
        </>
    )
}

export default WhyusPage