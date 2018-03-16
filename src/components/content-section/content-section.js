import React, { Component } from 'react';
import './content-section.css'

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