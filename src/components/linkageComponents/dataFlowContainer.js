import React, { Component } from 'react';
import DataFlowHeader from './dataFlowHeader';
import LinkageChart from './linkageChart';

export default class DataFlowContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DataFlowHeader />

                <div className="jumbotron">
                <h3 className="display-4">Linkage Chart</h3>
                    <LinkageChart />
                </div>
            </div>
        );
    }
}