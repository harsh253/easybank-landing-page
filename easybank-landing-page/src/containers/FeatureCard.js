import React, {Component}  from 'react';


export default class FeatureCard extends Component{
    render(){
        return(
            <div className="feature-card-container">
                <div className="feature-icon">
                    <img alt="feature" src={this.props.data.imgSrc}></img>
                </div>
                <div className="feature">
                    <h5>{this.props.data.feature}</h5>
                </div>
                <div className="feature-description">
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}