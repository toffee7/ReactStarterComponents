import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const CustomTable = (props) => {
    return (
        <BootstrapTable data={props.data} striped={true} hover={true}>
            <TableHeaderColumn dataField="employeeGEID" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField="employeeName" dataSort={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="employeePhotoLink" >Photo Link</TableHeaderColumn>
        </BootstrapTable>
    );
}

export default CustomTable;