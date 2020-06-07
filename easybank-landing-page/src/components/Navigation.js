import React, {Component} from 'react';
import logo from '../images/logo.svg'

export default class Navigation extends Component{

    constructor(props){
        super();
        this.state = {
            menuOpen : false
        }
    }

    

    expandMenu = () =>{
        var elem = document.getElementById('navLinksContainer');
        var topBar = document.getElementById('barTop');
        var midBar = document.getElementById('barMid');
        var bottomBar = document.getElementById('barBot');
        if(!this.state.menuOpen){
            elem.className+=" show-menu"
            topBar.style.transform = "translate(0,10px)";
            midBar.style.transform = "translate(-2px,5px) rotate(220deg)"
            bottomBar.style.transform = "translate(-2px,-3px) rotate(-220deg)"
            topBar.style.display = "none"
            bottomBar.style.width = "100%"
            midBar.style.width = "100%"
            document.getElementsByClassName('intro-container')[0].style.backgroundImage = "linear-gradient(rgb(162, 165, 172), hsl(0, 0%, 100%))"
        }else{
            elem.className= "nav-links-container"
            topBar.style.transform = "translate(0,0px)";
            midBar.style.transform = "translate(0,0px) rotate(0deg)"
            bottomBar.style.transform = "translate(0,0px) rotate(0deg)"
            topBar.style.display = "block"
            bottomBar.style.width = "50%"
            midBar.style.width = "70%"
            document.getElementsByClassName('intro-container')[0].style.backgroundImage = "linear-gradient(hsl(220, 16%, 96%), hsl(0, 0%, 100%))"
        }

        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-elements">
                    <div className="logo-container">
                        <img alt="logo" src={logo}></img>
                    </div>
                    <div className="nav-links-container" id="navLinksContainer">
                        <div className="nav-links">
                            <div className="link">
                                <a href="">Home</a>
                            </div>
                            <div className="link">
                                <a href="">About</a>
                            </div>
                            <div className="link">
                                <a href="">Contact</a>
                            </div>
                            <div className="link">
                                <a href="">Blog</a>
                            </div>
                            <div className="link">
                                <a href="">Careers</a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-btn">
                        <div>
                            <a href="javascript:void(0)" onClick={this.expandMenu}>
                                <div id="barTop" className="bar"></div>
                                <div id="barMid" className="bar"></div>
                                <div id="barBot" className="bar"></div>
                            </a>
                        </div>
                    </div>
                    <div className="invite-btn-container">
                        <button type="button">Request Invite</button>
                    </div>
                </div>
            </div>
        )
    }
}
