import React, {Component} from 'react';
import About_content_info from "./About_content_info";
import About_content_cards from "./About_content_cards";
import About_content_button from "./About_content_button";

class About_content extends Component {
    render() {
        return (
            <div className="about_content border">
                <About_content_info/>
                <About_content_cards/>
                <About_content_button/>
            </div>
        )
    }
}

export default About_content;