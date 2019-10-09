import React, {PureComponent} from 'react';

class About_content_card extends PureComponent {
    render() {
        return (
            <div className="about_content_card border">
                <div className="about_content_card_title">
                    <span>{this.props.text}</span>
                </div>
                <div className="about_content_card_img">
                    <img src={this.props.src} alt={this.props.text}/>
                </div>
            </div>
        )
    }
}

export default About_content_card;