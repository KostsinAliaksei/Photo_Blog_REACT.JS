import React, {PureComponent} from 'react';
import {MyContext} from "../../Contexts/MyContext";

class About_content_button extends PureComponent {

    static contextType = MyContext;

    render() {
        return (
            <div className="about_content_button border">
                <button style={this.context}>View My Flickr Profile</button>
            </div>
        )
    }
}

export default About_content_button;