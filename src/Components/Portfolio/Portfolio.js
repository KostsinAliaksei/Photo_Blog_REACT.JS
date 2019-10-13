import React, {PureComponent} from 'react'
import Portfolio_text from "./Protfolio_text";
import Portfolio_cards from "./Portfolio_cards";
import '../../Styles/Portfolio.css';

class Portfolio extends PureComponent {
    render() {
        return (
            <div className="portfolio border">
                <div className="portfolio_content border">
                    <Portfolio_text/>
                    <Portfolio_cards/>
                </div>
            </div>
        )
    }
}

export default Portfolio;