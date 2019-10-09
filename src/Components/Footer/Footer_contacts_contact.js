import React, {PureComponent} from 'react';

class Footer_contacts_contact extends PureComponent {
    render() {
        return (
            <div className="footer_contacts_contact border">
                <div className="footer_contacts_contact_logo">

                </div>
                <div className="footer_contacts_contact_text">
                    <h3>Contacts</h3>
                    <span>
                        237 Church St,
                        San Francisco,CA 94114,USA
                        nazmulhasanjingar@gmail.com
                    </span>
                </div>
                <div className="footer_contacts_contact_follow">
                    <h3>Follow me on:</h3>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-simplybuilt" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Footer_contacts_contact;