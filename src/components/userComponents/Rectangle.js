import React, { Component } from 'react';

export default class Rectangle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <svg width="50" height="50">
                    <rect width="50" height="50" className="rectClass"/>     
                     <polygon points="0,50 25,25 50,50" className="triangleClass"/>           
                </svg>                
            </div>
        );
    }
}