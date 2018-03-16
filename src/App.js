import React, {Component} from 'react';
import './App.css';
import SectionProfile from "./content/section-profile/section-profile";
import SectionProject from "./content/section-education/section-education";
// import SectionContact from "./content/section-contact/section-contact";

class App extends Component {
    render() {
        return (
            <div className="App">
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

export default App;
