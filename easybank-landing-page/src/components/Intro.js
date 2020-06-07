import React,{Component} from 'react';
import bg from '../images/bg-intro-desktop.svg';
import mockups from '../images/image-mockups.png';


export default class Intro extends Component{
    render(){
        return(
            <div className="intro-container">
                <div className="info-container">
                    <div className="info-title">
                        <h2>Next Generation Digital Banking</h2>
                    </div>
                    <div className="info-content">
                        <p>Take your financial life online, Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
                    </div>
                    <div className="info-invite-btn-container">
                        <button type="button">Request Invite</button>
                    </div>
                </div>
                <div className="visual-container">
                    <div className="visual-bg-container">
                        <img alt="bg" src={bg} className="desktop"></img>
                        <img alt="bg" src={bg} className="mobile"></img>
                    </div>
                    <div className="mockups-container">
                            <img alt="mockups" src={mockups}></img>
                    </div>
                    {/* <img alt="mockups" src={mockups}></img> */}
                </div>
            </div>
        )
    }
}