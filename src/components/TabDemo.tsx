import * as React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

class ContactInfo extends React.Component {
    render() {
      return (
        <Tabs>
            <Tab iconClassName="" linkClassName="Tab1">
                <div className="tab-content">
                    <h3>Elastacloud is great</h3>
                </div>
            </Tab>
            <Tab iconClassName="" linkClassName="Tab2">
                <div className="tab-content">
                    <p><a href="https://www.elastacloud.com" target="_blank">Check out Elastacloud the website</a></p>
                </div>
            </Tab>
            <Tab iconClassName="" linkClassName="Tab3">
                <div className="tab-content">
                    <p>Seriously, Elastacloud also have some amazing blog posts</p>
                    <p><a href="http://channels.elastacloud.com" target="_blank">You should check those out too</a></p>
                </div>
            </Tab>
        </Tabs>
      );
    }
}

export default ContactInfo;