import React, {PureComponent} from 'react';

class Footer_contacts_posts extends PureComponent {
    render() {
        return (
            <div className="footer_contacts_posts border">
                <h2>Latest Blog Posts</h2>
                <div className="footer_contacts_posts_post">
                    <img src="img/footer/post1.png" alt="post1"/>
                    <div>
                        <span>
                            Design is the method of putting form and content together.
                        </span>
                        <span><strong>Life style</strong> - July 3, 2017</span>
                    </div>
                </div>

                <div className="footer_contacts_posts_post">
                    <img src="img/footer/post2.png" alt="post2"/>
                    <div>
                        <span>
                            Design is the method of putting form and content together.
                        </span>
                        <span><strong>Life style</strong> - July 3, 2017</span>
                    </div>
                </div>

                <h3>MORE...</h3>
            </div>
        )
    }
}

export default Footer_contacts_posts;