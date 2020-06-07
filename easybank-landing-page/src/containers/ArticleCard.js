import React, {Component} from 'react';


export default class ArticleCard extends Component{
    render(){
        let content = this.props.data.content;
        if(content.length >=120){
            content = content.slice(0,115) + "...";
        }
        return(
            <div className="articles-card-container">
                <div className="card-image">
                    <img alt="img" src={this.props.data.imgSrc}></img>
                </div>
                <div className="card-content">
                    <div className="author">
                        <h6>By {this.props.data.author}</h6>
                    </div>
                    <div className="title">
                        <h6>{this.props.data.title}</h6>
                    </div>
                    <div className="content">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        )
    }
}