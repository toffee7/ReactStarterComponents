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
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                
                          
                <div className="row">
                        <div className="col-4">
                            <h5 className="display-5">Source Type</h5>
                            <GenericSelect />
                        </div>  

                        <div className="col-4">
                            <h5 className="display-5">Subject Area</h5>
                            <GenericSelect />
                        </div>  

                        <div className="col-4">
                            <h5 className="display-5">Location</h5>
                            <GenericSelect />
                        </div>        

                    </div>
            </div>
        );
    }
}