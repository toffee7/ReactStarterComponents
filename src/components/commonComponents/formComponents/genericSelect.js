import React, { Component } from 'react';
import Select from 'react-select';


export default class GenericSelect extends Component {
    constructor(props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            options: this.props.options || [{label: "Apple", value: "Apple"},{label: "Google", value: "Google"}],
            value: []
        };
    }

    handleSelectChange(value) {    
        //call functions
        this.setState({value});
    }

    render() {
        return (
            <Select multi={true}  options={this.state.options} value={this.state.value}
            placeholder="Select Source" matchPos= "any" onChange={this.handleSelectChange} />
        );
    }

    componentDidMount() {
        //AJAX call to fetch list of items
        let sourceCollection = [];
        // service.getSourceSystems(getOptions).then( (Object) => {
        // let collection = Object;
        // for (var i=0; i<collection.length;i++){
        //     sourceCollection.push({label: collection[i], value: collection[i]});
        // }
        // });
        // this.setState({options: sourceCollection});
    }
}