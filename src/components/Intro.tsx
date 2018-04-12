import * as React from 'react';

class ContactInfo extends React.Component {
    render() {
      return (
        <div className="intro">
            <h2>Info</h2>
            <p>Example of tab components using React and TypeScript</p>
            <p>Based on JS code from&nbsp;
                <a href="https://gist.github.com/diegocasmo/5cd978e9c5695aefca0c6a8a19fa4c69" target="_blank">
                    Diego Castillo
                </a>&nbsp;
                and amended by me to work for TypeScript.</p>
        </div>
      );
    }
}

export default ContactInfo;