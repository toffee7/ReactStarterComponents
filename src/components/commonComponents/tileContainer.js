import React, { Component } from 'react';
import Tile from './tile';

export default class TileContainer extends Component {
    constructor(props) {
        super(props);       
        
    }

    handleClick(e) {
        this.props.navigate(e);
    }
    
    render() {
        return (
        <div className="container-fluid">
            <div className="row justify-content-around">
               
                    <div className="col" onClick={() => {this.handleClick("add")}}>
                        <Tile title={"sampleTitle"} description={"description"} buttonText={"Next >"} tileClassName={"card card-success mb-3"}/>
                    </div>
                
                    <div className="col" onClick={() => {this.handleClick("edit")}} >
                        <Tile title={"sampleTitle"} description={"description"} buttonText={"Next >"} tileClassName={"card card-info mb-3"}/>
                    </div>               
               
                    <div className="col" onClick={() => {this.handleClick("delete")}} >
                       <Tile title={"sampleTitle"} description={"description"} buttonText={"Next >"} tileClassName={"card card-danger mb-3"}/>
                    </div>
               
            </div>
        </div>
        );
    }
}