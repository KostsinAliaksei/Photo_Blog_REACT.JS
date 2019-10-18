import React, {PureComponent} from 'react'

class Portfolio_cards extends PureComponent {
    render() {
        return (
            <div className="portfolio_cards border">
                <div className="portfolio_cards_images border">
                    <div className="portfolio_cards_images_left border">
                        <div>
                            <img src="img/portfolio_images/1.PNG" alt="1"/>
                        </div>
                        <div>
                            <img src="img/portfolio_images/6.PNG" alt="6"/>
                        </div>
                    </div>
                    <div className="portfolio_cards_images_right border">
                        <div>
                            <img src="img/portfolio_images/2.PNG" alt="2"/>
                        </div>
                        <div>
                            <img src="img/portfolio_images/3.PNG" alt="3"/>
                        </div>
                        <div>
                            <img src="img/portfolio_images/4.PNG" alt="4"/>
                        </div>
                        <div>
                            <img src="img/portfolio_images/5.PNG" alt="5"/>
                        </div>
                        <div>
                            <img src="img/portfolio_images/7.PNG" alt="7"/>
                        </div>
                    </div>
                </div>
                <div className="portfolio_cards_button">
                    <button className='btn'>SEE MORE</button>
                </div>
            </div>
        )
    }
}

export default Portfolio_cards;