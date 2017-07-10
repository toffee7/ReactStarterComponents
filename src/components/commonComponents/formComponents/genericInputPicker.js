import React, { Component } from 'react';

export default class GenericInputPicker extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            currentValue: ""
        };
    }

    handleChange(e) {
        console.log("Inside handleChange");
        let cValue = e.target.value; 
        console.log(cValue);
        this.props.onValueChange(cValue);
        this.setState((prevState, props) => {             
            return ({currentValue: cValue});
        });
       
    }

    render() {
        /* use type="password" for password
            type="number" for number
            type="tel" for telephone
            type="datetime-local" for Date n time
            type="date" for date
            type="month" for month
            type="week" for week
            type="time" for time
            type="color" for color
            for more info https://developer.mozilla.org/en/docs/Web/HTML/Element/input
        */
        
        return (
            <div className="form-group row">
                <label className="col-2 col-form-label">{this.props.label}</label>
                <div className="col-10">
                    <input className="form-control" type={this.props.inputType} value={this.state.currentValue} id={this.props.label} 
                    onChange={this.handleChange}/>
                </div>
            </div>
        );
    }
}