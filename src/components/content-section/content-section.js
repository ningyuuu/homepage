import React, { Component } from 'react';
import './content-section.less'

class ContentSection extends Component {

    render() {
        return (
            <div className={"section "+this.props.className}>
                { this.props.children }
            </div>
        );
    }
}

export default ContentSection;