import React, { Component } from 'react';
import ContentSection from "../../components/content-section/content-section";
import "./section-education.less"
import ntulogo from "../../img/ntu_logo.png"
import replogo from "../../img/rep-logo.jpg"
import ucblogo from "../../img/ucberkeley-logo.png"

class SectionEducation extends Component {
    render() {
        return (
            <ContentSection className="education-section">
                <h2><span>Education</span></h2>
                <div className="education-text">
                    <h4>M.Sc (Technology Management), B.Eng.Sc. (Civil Engineering)</h4>
                    <p>Nanyang Technological University (Renaissance Engineering Programme)</p>
                    <p>with 1 year exchange at UC Berkeley</p>
                </div>
                <div className="education-logos">
                    <img className="ntu-logo" src={ntulogo} alt="NTU" />
                    <img className="ucb-logo" src={ucblogo} alt="UC Berkeley" />
                    <img className="rep-logo" src={replogo} alt="Renaissance Engineering Programme" />
                </div>
            </ContentSection>
        );
    }
}

export default SectionEducation;
