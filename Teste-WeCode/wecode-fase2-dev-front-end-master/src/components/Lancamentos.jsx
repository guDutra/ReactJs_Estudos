import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import '../utils'
import { getProducts } from '../utils';
const Lancamentos = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        getProducts().then(res => {
            setProducts(res);
        }).catch(error => console.log("Erro ao carregar produtos", error));
    }, []);

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1.5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    return (
        <div>
            <h2>Lançamentos</h2>
            {products && products.length > 0 ? (
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id}>
                            <div className='img-lancamento'>
                                <span><img src="/static/images/white-heart.png" alt="" /></span>
                                <img src={product.image} alt="" />
                                <p> {product.price.isDiscount !== null ? <span> {Math.abs((((product.price.isDiscount-product.price.amount)/product.price.amount)*100).toFixed(1))}% OFF </span> : ''} {product.price.amount}</p>
                                <span><img src="/static/images/adicionar-carrinho.png" alt="" /></span>
                            </div>

                            <p> {product.price.isDiscount !== null ? <span> {product.price.isDiscount} </span> : ''} {product.price.amount}</p>

                        </div>
                    ))}

                </Slider>
            ) : (
                <p>loading</p>
            )}
        </div>
    )
}

export default Lancamentos