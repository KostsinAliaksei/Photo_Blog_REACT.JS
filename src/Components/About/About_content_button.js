import React, {Component} from 'react';
import {MyContext} from "../../index";

class About_content_button extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {value =>
                    <div className="about_content_button border">
                        <button style={value}>View My Flickr Profile</button>
                    </div>
                }
            </MyContext.Consumer>
        )
    }
}

export default About_content_button;