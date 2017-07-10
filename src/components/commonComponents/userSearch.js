import React, { Component } from 'react';

export default class UserSearch extends Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            soeid: "",
            searchFormClass: "form-group row",
            searchBoxClass: "form-control form-control-success",
            searchButtonIcon: "fa fa-search",
            searchButtonClass: "btn btn-secondary disabled"
        };
    }

    handleInput(e) {
        let currentSoeid = e.target.value;
       
        let pattern = /\w\w\d\d\d\d\d/i;
        if (currentSoeid.match(pattern) !== null && currentSoeid.length === 7) {
            this.setState((prevState, props) => {
                return ({soeid: currentSoeid ,
                searchFormClass: "form-group row has-success",
                searchBoxClass: "form-control form-control-success",
                searchButtonClass: "btn btn-secondary"});
            });
        } else {
            this.setState((prevState, props) => {
                return ({soeid: currentSoeid ,
                searchFormClass: "form-group row has-warning",
                searchBoxClass: "form-control form-control-warning",
                searchButtonClass: "btn btn-secondary disabled" });
            });
        }
        
    }

    handleSearch() {
        this.setState((prevState, props) => {
            return ({ searchButtonIcon: "fa fa-circle-o-notch fa-spin"});
        });
    }

    render() {
        return (
            <div className="container search-box">
                <form>
                    <div className={this.state.searchFormClass}>
                        <label className="col-sm-1 col-form-label">Employee ID</label>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <input type="email" className={this.state.searchBoxClass} id="inputHorizontalSuccess" 
                                onChange={this.handleInput} value={this.state.soeid} placeholder="Enter Employee ID" />
                                <span className="input-group-btn">
                                    <button className={this.state.searchButtonClass} type="button" onClick={this.handleSearch}><i className={this.state.searchButtonIcon} aria-hidden="true"></i></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}