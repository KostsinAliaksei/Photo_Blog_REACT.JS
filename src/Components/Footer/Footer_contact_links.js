import React, {Component} from 'react';

class Footer_contacts_links extends Component {
    render() {
        return (
            <div className="footer_contacts_links border">
                <h2>Quick link</h2>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Clients</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer_contacts_links;