import React , {Component} from 'react';
import currencyImage from '../images/image-currency.jpg';
import confettiImage from '../images/image-confetti.jpg';
import planeImage from '../images/image-plane.jpg';
import restaurantImage from '../images/image-restaurant.jpg';
import ArticleCard from '../containers/ArticleCard';

const data = [
    {
        imgSrc : currencyImage,
        author: 'Claire Robinson',
        title: 'Receive money in any currency with no fees',
        content: 'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single...'
    },
    {
        imgSrc : restaurantImage,
        author: 'Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        content: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...'
    },
    {
        imgSrc : planeImage,
        author: 'Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        content: 'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you...'
    },
    {
        imgSrc : confettiImage,
        author: 'Claire Robinson',
        title: 'Our invite-only Beta accounts are now live',
        content: 'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site...'
    }
]


export default class Articles extends Component{
    render(){

        let cards = data.map((data,key)=>{
            return(
                <ArticleCard key={key} data={data}></ArticleCard>
            )
        })
        return(
            <div className="articles-container">
                <div className="articles-top">
                    <div className="articles-title">
                        <h3>Latest Articles</h3>
                    </div>
                </div>
                <div className="articles-bottom">
                    {cards}
                </div>
            </div>
        )
    }
}