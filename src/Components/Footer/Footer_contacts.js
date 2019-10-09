import React, {PureComponent} from 'react';
import Footer_contacts_contact from "./Footer_contacts_contact";
import Footer_contacts_posts from "./Footer_contact_posts";
import Footer_contacts_links from "./Footer_contact_links";
import Footer_contacts_updates from "./Footer_contact_updates";

class Footer_contacts extends PureComponent {
    render() {
        return (
            <div className="footer_contacts border" style={this.props.value}>
                <Footer_contacts_contact/>
                <Footer_contacts_posts/>
                <Footer_contacts_links/>
                <Footer_contacts_updates/>
            </div>
        )
    }
}

export default Footer_contacts;