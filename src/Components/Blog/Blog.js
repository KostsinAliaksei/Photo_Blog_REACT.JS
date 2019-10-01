import React, {Component} from 'react'
import Blog_card from "./Blog_card";

const cardsTitle = 'Design is the method of putting form and content together.';
const cardsDate = 'Life style - July 3, 2017';
const cardsText = `Sed ut perspiciatis unde omnis 
iste natus error sit lao hoksi voluptatem 
lios mukatu accusantium doloremq doisa 
nojilaudan tium, totam rem aperiam, uni 
eaque ipsa quae ab cok illo inven tore siva.`;

class Blog extends Component {
    render() {
        return (
            <div className="blog border">
                <div className="blog_back">
                    <Blog_card src={'img/blog/blog_card1.PNG'} title={cardsTitle} date={cardsDate} text={cardsText}/>
                    <div className="blog_title border">
                        <h3>Blog</h3>
                        <span>
                            The point of using Lorem Ipsum
                            is that it has a non  more-or-less
                            normal distri bution of letters, as
                            cliper opposed. a closer look to our fully,
                        </span>
                        <Blog_card src={'img/blog/blog_card2.PNG'} title={cardsTitle} date={cardsDate} text={cardsText}/>
                    </div>
                    <Blog_card src={'img/blog/blog_card3.PNG'} title={cardsTitle} date={cardsDate} text={cardsText}/>
                </div>
            </div>

        )
    }
}

export default Blog;