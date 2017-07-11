import React, { Component } from 'react';
import CustomTable from '../commonComponents/customTable';
import axios from 'axios';

var products = [];

export default class SampleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[]
        };
    }

    render() {
        return (
            <div className="col-8">
                <CustomTable data={this.state.data}/>
            </div>
        );
    }

    componentDidMount() {
        
        let url = "";

        axios.get(url)
        .then((response) => {
            console.log(response.data);
            let newArray = [];
            newArray.push(response.data);
            newArray.push(response.data);
            this.setState((prevState, props) => {
                return ({data: newArray});
            });
        });
        
    }
    
};
