import React, { Component } from 'react';
import CustomTable from '../commonComponents/customTable';

var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  }];

const SampleTable = (props) => {
    return (
        <div className="col-8">
            <CustomTable data={products}/>
        </div>
    )
};

export default SampleTable;