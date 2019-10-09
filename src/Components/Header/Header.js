import React, {PureComponent} from 'react';
import Header_head from "./Header_head";
import Header_content from "./Header_content";
import Header_bottom from "./Header_bottom";
import {MyContext} from "../../index";


class Header extends PureComponent {
    render() {
        return (
            <div className="header border">
                <MyContext.Consumer>
                    {value =>
                        <div className="header_back" style={value}>
                            <Header_head/>
                            <Header_content/>
                            <Header_bottom/>
                        </div>
                    }
                </MyContext.Consumer>
            </div>
        )
    }
    componentDidMount() {
        const loader = document.getElementById('loader');
        loader.className = 'loaded';
    }
}

export default Header;
