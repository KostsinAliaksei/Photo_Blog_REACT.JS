import React, {PureComponent} from 'react';

class Footer_foot extends PureComponent {
    render() {
        return (
            <div className="footer_foot" style={this.props.value}>
                <span>All Rights @ 2017 By Nazmul Hasan Jingar</span>
            </div>
        )
    }
}

export default Footer_foot;