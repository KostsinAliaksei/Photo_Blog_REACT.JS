import React, {Component} from 'react';
import About_content_card from "./About_content_card";

class About_content_cards extends Component {
    render() {
        return (
            <div className="about_content_cards border">
                <About_content_card text='FASHION' src='img/about/card1.PNG'/>
                <About_content_card text='PORTRAITS' src='img/about/card2.PNG'/>
                <About_content_card text='LIFESTYLE' src='img/about/card3.PNG'/>
            </div>
        )
    }
}

export default About_content_cards;