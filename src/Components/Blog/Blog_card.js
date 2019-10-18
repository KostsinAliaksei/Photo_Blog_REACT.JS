import React, {PureComponent} from 'react'

class Blog_card extends PureComponent {
    render() {
        return (
            <div className="blog_card border">
                <div className="blog_card_img">
                    <img src={this.props.src} alt={this.props.src}/>
                </div>
                <div className="blog_card_content">
                    <div className="blog_card_content_title">
                        <h4>{this.props.title}</h4>
                    </div>
                    <div className="blog_card_content_date">
                        <span>{this.props.date}</span>
                    </div>
                    <div className="blog_card_content_text">
                        <span>{this.props.text}</span>
                    </div>
                    <div className="blog_card_content_button">
                        <button className='btn'>Read More</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog_card;