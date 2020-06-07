import React , {Component} from 'react';
import apiIcon from '../images/icon-api.svg';
import budgetingIcon from '../images/icon-budgeting.svg';
import onboardingIcon from '../images/icon-onboarding.svg';
import onlineIcon from '../images/icon-online.svg';
import FeatrueCard from '../containers/FeatureCard';

const data = [
    {
        imgSrc: onlineIcon,
        feature: 'Online Banking',
        description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
        imgSrc: budgetingIcon,
        feature: 'Simple Budgeting',
        description: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.'
    },
    {
        imgSrc: onboardingIcon,
        feature: 'Fast Onboarding',
        description: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
        imgSrc: apiIcon,
        feature: 'Open API',
        description: 'Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.'
    }
]

export default class Feature extends Component{
    render(){

        let features = data.map((feature,key)=>{
            return(
                <FeatrueCard key={key} data={feature}></FeatrueCard>
            )
        })
        return(
            <div className="feature-container">
                <div className="feature-top">
                    <div className="feature-heading-container">
                        <h3>Why Choose Easybank</h3>
                    </div>
                    <div className="feature-heading-description-container">
                        <p>We leverage open banking to turn your bank account into your financial hub.
                            Control your finances like never before.
                        </p>
                    </div>
                </div>
                <div className="feature-bottom">
                    {features}
                </div>
            </div>
        )
    }
}