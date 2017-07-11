import React, { Component } from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label className="switch"> 
                <input type="checkbox" />
                <div className="slider round"></div>
            </label>
        );
    }    
}