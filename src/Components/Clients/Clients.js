import React, {PureComponent} from 'react';
import {MyContext} from "../../index";


class Clients extends PureComponent {
    render() {
        return (
            <div className="clients_back">
                <MyContext.Consumer>
                    {value =>
                        <div className="clients border" style={value}>
                            <div className="clients_title border">
                                <span>Happy Clients</span>
                            </div>
                            <div className="clients_icons border">
                                <div className="clients_icons_icon">
                                    <img src="img/client_logos/ic1.png" alt="ic1"/>
                                </div>
                                <div className="clients_icons_icon">
                                    <img src="img/client_logos/ic2.png" alt="ic2"/>
                                </div>
                                <div className="clients_icons_icon">
                                    <img src="img/client_logos/ic3.png" alt="ic3"/>
                                </div>
                                <div className="clients_icons_icon">
                                    <img src="img/client_logos/ic4.png" alt="ic4"/>
                                </div>
                                <div className="clients_icons_icon">
                                    <img src="img/client_logos/ic5.png" alt="ic5"/>
                                </div>
                                <div className="clients_icons_icon">
                                    <img src="img/client_logos/ic6.png" alt="ic6"/>
                                </div>
                            </div>
                        </div>
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}

export default Clients;