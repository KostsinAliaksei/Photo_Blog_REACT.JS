import React, {PureComponent} from 'react';
import Footer_form from "./Footer_form";
import Footer_contacts from "./Footer_contacts";
import Footer_foot from "./Footer_foot";
import {MyContext} from "../../Contexts/MyContext";
import '../../Styles/Footer.css';

class Footer extends PureComponent {

    static contextType = MyContext;

    render() {
        return (
            <div className="footer border">
                <Footer_form value={this.context}/>
                <Footer_contacts value={this.context}/>
                <Footer_foot value={this.context}/>
            </div>
        )
    }
}

export default Footer;