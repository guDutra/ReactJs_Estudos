import React from 'react'
import { getProducts } from '../utils'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/topPage.scss'
const TopPage = () => {

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    display: 'flex',
                    paddingBottom: '30px',
                    justifyContent: 'flex-end',
                }}
            >
                <ul style={{}}> {dots} </ul>
            </div>
        )
        ,

    };
    return (
        <>
            <div className='topPage'>
                <Slider {...settings}>
                    <div className='image-slider'>
                       <button>freferfer</button>
                    </div>
                    <div>
                       
                    </div>
                    <div>

                    </div>
                </Slider>
            </div>


        </>

    );
    ;
}

export default TopPage