import React, { Component } from 'react';

const Tile = (props) => {
    
     return (
        <div className="card card-success mb-3">
            <div className="card-block">
                <h3 className="card-title">{props.name}</h3>
                <p className="card-text">{props.category}</p>
                 <p className="card-text">${props.price}</p>
                 
                <div className="btn btn-primary" onClick={() => {props.onAdd(props.sid)}}>Add</div>
            </div>
        </div>
    );
};

export default Tile;
