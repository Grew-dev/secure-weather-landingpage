import React from 'react'
import "../pages/mystyles.scss"
import "../css/main.css"
import traditionalgif from '../assets/traditional4.gif'
import pointng from '../assets/pointng4.gif'
import Form from '../components/Form'



const Safety = () => {
    const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
    return (
        <div className="section">
            <div className="container">
                <div>
                    <h1 className="safetyheader">
                        What makes Secure Local Weather so secure?
                    </h1>
                    <div className="description">
                        <p className="content description-text">Secure Local Weather uses pointNG location identification method that <span style={{fontWeight:"bolder"}}>never sends any coordinate data outside the client or to 3rd party servers</span>.</p> 
                    </div>
                    <div className="columns columns-space">
                        <div className="column column-space maincolumns-safety">
                            <div className="box">
                            <div className="content ">
                                <p className="movetocenter animation-text">How location identification works in Secure Local Weather:</p>
                                <img className="safety-animation " src={pointng} alt="pointng location identification" />
                            </div>
                            </div>
                            <p className="animation-text-description">Coordinate data stays in the client!</p>
                            <button onClick={()=>{openInNewTab('https://www.pointng.io/')}} class="button is-primary animation-button">Read More About pointNG</button>

                        </div>
                        <div className="column column-space  maincolumns-safety">
                            <div className="box">
                            <div className="content ">
                                <p className="movetocenter animation-text">How location identification works in traditional weather apps:</p>
                                <img className="safety-animation" src={traditionalgif} alt="traditional location identification" />
                            </div>
                            </div>
                            <p className="animation-text-description">Typical weather apps send <b>the users exact location coordinates, over the internet, to third party services</b>.</p>
                        </div>
                    </div>
                        <div className="section form-section">
                            <div className="container">
                                <div className="content">
                                    <div className="movetocenter sign-up-form">
                                        <p className="sign-up-text">Sign up for secure weather updates here:</p>
                                        <div style={{marginLeft:"20px"}}>
                                            <Form />
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Safety
