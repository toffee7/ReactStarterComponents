import React, { Component } from 'react';
import GenericSelect from '../commonComponents/formComponents/genericSelect';

export default class DataFlowHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Data Flow</h1>
                <p className="lead">Data Flow depicts the relation between sources,subject areas and locations. Select the filters to generate the Linkage.</p>
                
                          
                <div className="row">
                        <div className="col-4">
                            <h5 className="display-5">Source Type</h5>
                            <GenericSelect options={[{label: "Source 1", value: "Source 1"},{label: "Source 2", value: "Source 2"}]} />
                        </div>  

                        <div className="col-4">
                            <h5 className="display-5">Subject Area</h5>
                            <GenericSelect options={[{label: "Subject Area 1", value: "Subject Area 1"},{label: "Subject Area 2", value: "Subject Area 2"}]} />
                        </div>  

                        <div className="col-4">
                            <h5 className="display-5">Location</h5>
                            <GenericSelect options={[{label: "Location 1", value: "Location 1"},{label: "Location 2", value: "Location 2"}]} />
                        </div>        

                    </div>
            </div>
        );
    }
}