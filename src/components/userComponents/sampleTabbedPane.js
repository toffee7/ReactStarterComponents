import React, { Component } from 'react';
import axios from 'axios';

export default class SampleTabbedPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#messages" role="tab">Messages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a>
                </li>
            </ul>


            <div className="tab-content">
                <div className="tab-pane active" id="home" role="tabpanel">Home text</div>
                <div className="tab-pane" id="profile" role="tabpanel">Profile text</div>
                <div className="tab-pane" id="messages" role="tabpanel">Messages</div>
                <div className="tab-pane" id="settings" role="tabpanel">Settings</div>
            </div>
        </div>
        );
    }

    componentDidMount() {
        var postData = {};
        postData['startDate'] = '2017-01-01' ;
        postData['endDate'] =  '2017-01-30' ;
        postData['viewType'] = 2;
        postData['region'] = 'GLOBAL';

        var postOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': ''
            },
            url: '',
            data: JSON.stringify(postData)
        };

        axios(postOptions)
        .then((response) => {
            console.log(response.data);
        });
    }
    
};

