import React, { Component } from 'react';
import GenericInputPicker from '../commonComponents/formComponents/genericInputPicker';
import Toggle from '../commonComponents/formComponents/toggle';
import GenericSelect from '../commonComponents/formComponents/genericSelect';

export default class SampleForm extends Component {
    constructor(props) {
        super(props);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleDateChange(v) {
        console.log("Inside Date callback" + v);
    }

    handleTextChange(v) {
        console.log("Inside Text callback" + v);
    }

    handleTimeChange(v) {
        console.log("Inside Time callback" + v);
    }

    render() {
        return (
            <div className="container">              
               
                <GenericInputPicker inputType={"time"} label={"Time"} onValueChange={this.handleTimeChange}/>
                <GenericInputPicker inputType={"date"} label={"Date"} onValueChange={this.handleDateChange}/>
                <GenericInputPicker inputType={"text"} label={"Text"} onValueChange={this.handleTextChange}/>
                <Toggle />
                <GenericSelect currentValue={[{label: "Apple", value: "Apple"}]} />
                
            </div>
        
        );
    }
}