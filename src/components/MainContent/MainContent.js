import React, { Component } from 'react';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';

class MainContent extends Component {
    render() {
        return (
            <main className="main-content">
                <Section1/>
                <Section2/>
                <Section3/>
            </main>
        );
    }
}

export default MainContent;
