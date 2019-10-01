import React, {Component} from 'react';
import About_img from "./About_img";
import About_content from "./About_content";

class About extends Component {
    render() {
        return (
            <div className="about border">
                <div className="about_back">
                    <About_img/>
                    <About_content/>
                </div>
            </div>
        )
    }
}

export default About;