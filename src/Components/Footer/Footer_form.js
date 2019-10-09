import React, {PureComponent} from 'react';

class Footer_form extends PureComponent {
    render() {
        return (
            <div className="footer_form border">
                <div className="footer_form_back" style={this.props.value}>
                    <form action="#">
                        <h1>Let`s work?</h1>
                        <input type="text" placeholder={'*Your Name'}/>
                        <input type="text" placeholder={'*Your Email'}/>
                        <textarea cols="30" rows="10" placeholder={'*Your Message'}></textarea>
                        <input type="submit" className={'submit'} value={'Send Message'}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Footer_form;