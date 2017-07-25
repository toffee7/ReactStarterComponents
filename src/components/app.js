import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NavigationBar from './commonComponents/navigationBar';
import Footer from './commonComponents/footer';
import Modal from './commonComponents/customModal';

class App extends Component {
    constructor(props) {
        super(props);     
        this.handleNavigation = this.handleNavigation.bind(this);   
        this.state = {
            siteTitle: "React Express"
        };
    }

    handleNavigation(e) {
        console.log(e);
    }

    render() {
        return  (
            <div>
                <NavigationBar title={this.state.siteTitle}/>
                <Modal />  
                                                            
            </div>

        );
    }
}

export default withRouter(App);