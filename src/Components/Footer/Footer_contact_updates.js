import React, {PureComponent} from 'react';

class Footer_contacts_updates extends PureComponent {
    render() {
        return (
            <div className="footer_contacts_updates border">
                <h2>Instagram Updates</h2>

                <div className="footer_contacts_updates_images">
                    <div className="footer_contacts_updates_images_top">
                        <div className="footer_contacts_updates_images_top_1">
                            <img src="img/footer/up1.png" width={'100%'} height={'100%'} alt="up1"/>
                        </div>
                        <div className="footer_contacts_updates_images_top_2">
                            <img src="img/footer/up2.png" alt="up2"/>
                            <img src="img/footer/up3.png" alt="up3"/>
                        </div>
                    </div>
                    <div className="footer_contacts_updates_images_bottom">
                        <img src="img/footer/up4.png" alt="up4"/>
                        <img src="img/footer/up5.png" alt="up5"/>
                        <img src="img/footer/up6.png" alt="up6"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer_contacts_updates;