import React, {PureComponent} from 'react';
import About_img from "./About_img";
import About_content from "./About_content";
import '../../Styles/About.css';

class About extends PureComponent {
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