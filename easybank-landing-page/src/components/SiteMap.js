import React, {Component} from 'react';
import logo from '../images/logo-white.svg'
import fbIcon from '../images/icon-facebook.svg'
import igIcon from '../images/icon-instagram.svg'
import ytIcon from '../images/icon-youtube.svg'
import twtIcon from '../images/icon-twitter.svg'
import pinterestIcon from '../images/icon-pinterest.svg'

export default class SiteMap extends Component{
    render(){
        return(
            <div className="footer-container">
                <div className="social-contacts-container">
                    <div className="logo-container">
                        <img alt="logo" src={logo}></img>
                    </div>
                    <div className="social-contacts">
                        <div className="fb">
                            <img src={fbIcon} alt="fb"></img>
                        </div>
                        <div className="yt">
                            <img src={ytIcon} alt="yt"></img>
                        </div>
                        <div className="twt">
                            <img src={twtIcon} alt="twt"></img>
                        </div>
                        <div className="pinterest">
                            <img src={pinterestIcon} alt="pinterest"></img>
                        </div>
                        <div className="ig">
                            <img src={igIcon} alt="ig"></img>
                        </div>
                    </div>
                </div>
                <div className="site-navigation">
                    <div className="nav-one">
                        <div className="map-nav-link">
                            <h6>About Us</h6>
                        </div>
                        <div className="map-nav-link">
                            <h6>Contact</h6>
                        </div>
                        <div className="map-nav-link">
                            <h6>Blog</h6>
                        </div>
                    </div>
                    <div className="nav-two">
                        <div className="map-nav-link">
                            <h6>Careers</h6>
                        </div>
                        <div className="map-nav-link">
                            <h6>Support</h6>
                        </div>
                        <div className="map-nav-link">
                            <h6>Privacy Policy</h6>
                        </div>
                    </div>
                </div>
                <div className="copyright-container">
                    <div className="invite-btn-container">
                        <button type="button">Request Invite</button>
                    </div>
                    <div className="copyright-text">
                        <h6>&copy; Easybank. All Rights Reserved</h6>
                    </div>
                </div>
            </div>
        )
    }
}