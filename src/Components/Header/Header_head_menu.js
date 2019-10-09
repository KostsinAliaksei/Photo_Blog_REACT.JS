import React, {PureComponent} from 'react';

class Header_head_menu extends PureComponent {
    render() {
        return (
            <ul className={'header_head_menu_list'}>
                <li className="header_head_menu_list_item">
                    <a href="#">Home</a>
                </li>
                <li className="header_head_menu_list_item">
                    <a href="#">About</a>
                </li>
                <li className="header_head_menu_list_item">
                    <a href="#">Clients</a>
                </li>
                <li className="header_head_menu_list_item">
                    <a href="#">Portfolio</a>
                </li>
                <li className="header_head_menu_list_item">
                    <a href="#">Blog</a>
                </li>
            </ul>
        )
    }
}

export default Header_head_menu;