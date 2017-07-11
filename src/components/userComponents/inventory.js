import React, { Component } from 'react';
import axios from 'axios';
import Tile from '../commonComponents/tile';
import _ from 'lodash';
import Cart from './cart';

export default class Inventory extends Component {
    constructor(props) {
        super(props);
        this.filterData = this.filterData.bind(this);
        this.sortData = this.sortData.bind(this);
        this.addToCart = this.addToCart.bind(this);

        this.state = {
            data: [],
            filteredData: [],
            category: [],
            cartItems: []
        };
    }

    sortData() {
        let sortedItems = _.sortBy(this.state.filteredData, "price");
        this.setState((prevState,props) => {
                return ({filteredData:sortedItems});
            });
    }

    addToCart(i) {
        console.log("Inside cart");
        console.log(i);

        let newCartItems=this.state.cartItems;
         this.state.data.map((item) => {
                if (item.id === i) {
                    console.log("Checking" +newCartItems.indexOf(item));
                    if (newCartItems.indexOf(item) == -1) {
                        item.qty = 1;
                        newCartItems.push(item);
                        console.log(item);
                    }else {
                        item.qty += 1;
                        
                        
                    }
                    
                }
            });

        this.setState((prevState, props) => {
                return ({cartItems: newCartItems});
        });
    }

    filterData(e) {
        let newItems = [];
        let category = e.target.value;
        console.log(category);
        
        this.state.data.map((i) => {
                if (category === i.category) {
                    newItems.push(i);
                }
            });

        this.setState((prevState, props) => {
                return ({filteredData: newItems});
        });
     }
    

    
    render() {
        let items = [];
        if (this.state.data.length > 0) {
            items = this.state.filteredData.map((i) => {
                return (<Tile name={i.name} 
                category={i.category}
                price={i.price}
                inventory={i.inventory}
                sid={i.id}
                key={i.id} onAdd={this.addToCart}/>);
            });
        }
        return (
            <div className="container">
                Category: <select name="categories" onChange={this.filterData} >
                    <option value="All">All</option>
                    <option value="Gifts">Gifts</option>
                    <option value="Tools">Tools</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Service">Service</option>
                     <option value="Cars">Cars</option>
                </select>

                <div className="btn btn-sm btn-primary" onClick={this.sortData}>Sort by Price</div>
                
                <div className="btn btn-sm btn-success"  data-toggle="modal" data-target="#cartModal">Cart</div>

                <div className="container">
                {items}
                </div>

                <Cart cartItems={this.state.cartItems}/>
            </div>
        );
    }

    componentDidMount() {
        axios.get("http://demo7687977.mockable.io/inventory")
        .then((res) => {
            let newData = res.data;
            console.log(newData);
            this.setState((prevState,props) => {
                return ({data: newData, filteredData:newData});
            });
        });
    }
}