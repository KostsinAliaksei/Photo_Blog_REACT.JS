import React, {PureComponent} from 'react';

class Header_content extends PureComponent {
    render() {
        return (
            <div className="header_content border">
                <div className="header_content_title border">
                    <span>Hello, I`m Dakota Jhonson</span>
                </div>
                <div className="header_content_text border">
                    <span>I’m an Art Director & Photographer based in the San Francisco.</span>
                </div>
                <div className="header_content_button border">
                    <button className='btn'>See My Works</button>
                </div>
            </div>
        )
    }
}

export default Header_content;