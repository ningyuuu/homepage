import React, { Component } from 'react';
import ContentSection from "../../components/content-section/content-section";
import profilepic from "../../img/profile-min.gif"
import "./section-profile.less"

class SectionProfile extends Component {
    render() {
        return (
            <ContentSection className="profile-section">
                <div className="profile-img">
                    <img src={profilepic} alt={"Profile pic"}/>
                </div>
                <div className="profile-text">
                    <h2><span>Andai Wang</span></h2>
                    <ul>
                        <li>Self-taught programmer</li>
                        <li>Likes Simcity</li>
                        <li>Snowboards and Windsurfs</li>
                    </ul>
                </div>
            </ContentSection>
        );
    }
}

export default SectionProfile;
