import React from "react"
import './login.css'
import stoic from '../assets/login/stoic.png'
import dfinity from '../assets/login/dfinity.png'
import plug from '../assets/login/plug.png'
const Index = () => {

    return (
        <>
            <div className="login-wrapper">
                <div className="login-left">
                    <div className="login-info">
                        <div className="login-title">DAOs To Earn</div>
                        <span>you can be a</span><br />
                        <span>boss.</span><br />
                        <span>you just work for </span><br />
                        <span>yourself</span><br />
                    </div>
                </div>
                <div className="login-right">
                    <div className="login-link-wrapper">
                        <span>Story</span>
                        <span>Workflow</span>
                        <span>FAQs</span>
                    </div>
                    <div className="login-function-wrapper">
                        <div className="login-item login-item-stoic">
                            <img src={stoic} alt="" />
                            <span>Stoic Identity</span>
                        </div>
                        <div className="login-item login-item-internet">
                            <img src={dfinity} alt="" />
                            <span>Internet Identity</span>
                        </div>
                        <div className="login-outside">
                            <div className="login-item-plug">
                                <img src={plug} alt="" />
                                <span>Plug  Identity</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Index