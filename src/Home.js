import "./Home.css";
import React from "react";
import Product from './Product';
import home_background from './images/home_background.png';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image"
                    src={home_background}
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="1"
                        title='Title 01'
                        price={200}
                        image="https://picsum.photos/200/300"
                    />
                    <Product
                        id="2"
                        title='Title 02'
                        price={200}
                        image="https://picsum.photos/200/300"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="3"
                        title='Title 03'
                        price={200}
                        image="https://picsum.photos/200/300"
                    />
                    <Product
                        id="4"
                        title='Title 04'
                        price={200}
                        image="https://picsum.photos/200/300"
                    />
                    <Product
                        id="5"
                        title='Title 05'
                        price={200}
                        image="https://picsum.photos/200/300"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="6"
                        title='Title 06'
                        price={200}
                        image="https://picsum.photos/200/300"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;