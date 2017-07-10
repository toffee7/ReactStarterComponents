import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const CustomTable = (props) => {
    return (
        <BootstrapTable data={props.data} striped={true} hover={true}>
            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField="price" >Product Price</TableHeaderColumn>
        </BootstrapTable>
    );
}

export default CustomTable;