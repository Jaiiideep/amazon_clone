import React from 'react';
import './Subtotal.css';

function Subtotoal() {
    return (
        <div className="subtotal">
            <p>
                Subtotal (0 items): <strong>0</strong>
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