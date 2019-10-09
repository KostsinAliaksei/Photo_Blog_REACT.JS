import React, {PureComponent} from 'react';

class Header_bottom extends PureComponent {
    render() {
        return (
            <div className="header_bottom border">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-simplybuilt" aria-hidden="true"></i>
            </div>
        )
    }
}

export default Header_bottom;