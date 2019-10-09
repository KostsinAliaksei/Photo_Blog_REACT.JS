import React, {Component} from 'react';
import Header_head from "./Header_head";
import Header_content from "./Header_content";
import Header_bottom from "./Header_bottom";
import {MyContext} from "../../Contexts/MyContext";


class Header extends Component {

    static contextType = MyContext;

    render() {
        return (
            <div className="header border">
                <div className="header_back" style={this.context}>
                    <Header_head/>
                    <Header_content/>
                    <Header_bottom/>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const loader = document.getElementById('loader');
        loader.className = 'loaded';
    }
}

export default Header;
