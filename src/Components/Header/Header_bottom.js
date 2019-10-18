import React, {PureComponent} from 'react';

class Header_bottom extends PureComponent {
    render() {
        return (
            <div className="header_bottom border">
                <i className="fa fa-facebook btn" aria-hidden="true"></i>
                <i className="fa fa-twitter btn" aria-hidden="true"></i>
                <i className="fa fa-instagram btn" aria-hidden="true"></i>
                <i className="fa fa-simplybuilt btn" aria-hidden="true"></i>
            </div>
        )
    }
}

export default Header_bottom;