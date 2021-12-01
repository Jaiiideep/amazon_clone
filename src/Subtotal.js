import './Subtotal.css';
import React from 'react';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Subtotoal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} items): <strong>Rs. {getBasketTotal(basket)}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
            </small>
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotoal;