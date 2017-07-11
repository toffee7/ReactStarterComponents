import React, { Component } from 'react';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        
        
    }


    render() {
        let price = 0;
        let tax = 0;
        let items =  this.props.cartItems.map((i) => {
           price = price+ Number(i.price*i.qty);
           
           if (i.category !== "Service") {
            tax = tax + (0.15*Number(price));
           }
           
           console.log(i);

            return (<div className="cart-item" key={i.id}>
                    <p>Name: {i.name} </p>
                    <p>Category: {i.category} </p>
                    <p>Price: {i.price} </p>
                    <p>Quantity: {i.qty} </p>
                </div>);
        });

        return (
            <div className="modal fade" id="cartModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Shopping Cart</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {items}

                    <p>Total Price: {price}</p>
                    <p>Total Tax: {tax}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        );
    }
}
