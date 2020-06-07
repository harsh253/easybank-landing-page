import React, {Component} from 'react';
import Navigation from './Navigation';
import Intro from './Intro';
import Feature from './Feature';
import Articles from './Articles';
import SiteMap from './SiteMap';

export default class Home extends Component{
    render(){
        return(
            <div className = "app-container">
                <Navigation></Navigation>
                <Intro></Intro>
                <Feature></Feature>
                <Articles></Articles>
                <SiteMap></SiteMap>
            </div>
        )
    }
}