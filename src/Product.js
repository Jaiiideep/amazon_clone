import React from 'react';
import './Product.css';

function Product({ id, title, image, price }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>
                    {title}
                </p>
                <p className='product__price'>
                    <small>Rs. </small>
                    <strong>{price}</strong>
                </p>
                <div className=""></div>
            </div>

            {/* Product Image */}
            <img
                className="product__image"
                src={image}
                alt=""
            />
            <button>Add to Basket</button>
        </div>
    );
}

export default Product;
