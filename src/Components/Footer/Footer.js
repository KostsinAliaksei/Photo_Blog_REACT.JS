import React, {Component} from 'react';
import Footer_form from "./Footer_form";
import Footer_contacts from "./Footer_contacts";
import Footer_foot from "./Footer_foot";
import {MyContext} from "../../index";

class Footer extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {value =>
                    <div className="footer border">
                        <Footer_form value={value}/>
                        <Footer_contacts value={value}/>
                        <Footer_foot value={value}/>
                    </div>
                }
            </MyContext.Consumer>
        )
    }
}

export default Footer;