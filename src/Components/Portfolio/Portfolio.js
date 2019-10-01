import React, {Component} from 'react'
import Portfolio_text from "./Protfolio_text";
import Portfolio_cards from "./Portfolio_cards";

class Portfolio extends Component {
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