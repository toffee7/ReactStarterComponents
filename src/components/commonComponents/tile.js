import React, { Component } from 'react';

const Tile = (props) => {
    
     return (
        <div className={props.tileClassName}>
            <div className="card-block">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.buttonText}</a>
            </div>
        </div>
    );
}

export default Tile;
