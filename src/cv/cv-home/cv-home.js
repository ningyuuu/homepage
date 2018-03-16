import React, {Component} from 'react';
import './cv-home.less';
import SectionProfile from "../section-profile/section-profile";
import SectionProject from "../section-education/section-education";
// import SectionContact from "../section-contact/section-contact";

class CVHome extends Component {
    render() {
        return (
            <div className="cv-home">
                <div className="navbar">
                    <ul>
                        <li><a>Hello</a></li>
                        <li><a>What I do</a></li>
                        <li><a>Contact me</a></li>
                    </ul>
                </div>
                <div className="content">
                    <SectionProfile/>
                    <SectionProject/>
                    {/*<SectionContact/>*/}
                </div>
                <div className="footer">

                </div>
            </div>
        );
    }
}

export default CVHome;
