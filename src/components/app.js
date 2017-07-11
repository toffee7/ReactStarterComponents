import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NavigationBar from './commonComponents/navigationBar';
import Footer from './commonComponents/footer';

class App extends Component {
    constructor(props) {
        super(props);     
        this.handleNavigation = this.handleNavigation.bind(this);   
        this.state = {
            siteTitle: "React Starter Components"
        };
    }

    handleNavigation(e) {
        console.log(e);
    }

    render() {
        return  (
            <div>
                <NavigationBar title={this.state.siteTitle}/>  
                <Footer />                                                  
            </div>

        );
    }
}

export default withRouter(App);