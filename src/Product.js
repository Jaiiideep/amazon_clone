import './Product.css';
import React from 'react';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Dispatching the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price
            },
        });
    };

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
            <button onClick={addToBasket}>
                Add to Basket
            </button>
        </div>
    );
}

export default Product;
