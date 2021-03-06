import React from 'react';
import {Link} from 'react-router-dom'
import PaypalButton from './PaypalButton


function CartTotal({value.history}) {
    const {cartSubTotal, cartTax, cartTotal, clear} = value
    console.log(clear)
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button onClick={() => clear()} className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            subtotal: 
                        </span> <strong> $ {cartTotal}</strong>
                    </h5>

                    <h5>
                        <span className="text-title">
                            Tax: 
                        </span> <strong> $ {cartTax}</strong>
                    </h5>

                    <h5>
                        <span className="text-title">
                        cartSubTotal: 
                        </span> <strong> $ {cartSubTotal}</strong>
                    </h5>
                    <PaypalButton total ={cartTotal}  clearCart={clear} history={history} />

                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartTotal;
