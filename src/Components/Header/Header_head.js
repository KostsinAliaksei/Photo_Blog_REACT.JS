import React, {Component} from 'react';
import Header_head_menu from "./Header_head_menu";

class Header_head extends Component {
    render() {
        return (
            <div className="header_head border">
                <div className="header_head_logo">

                </div>

                <div className="header_head_menu">
                    <Header_head_menu/>
                </div>
            </div>
        )
    }
}

export default Header_head;