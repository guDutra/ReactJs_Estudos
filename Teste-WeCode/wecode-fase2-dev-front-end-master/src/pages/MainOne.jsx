import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"
import '../components/navbar.scss'
import '../components/topPage.scss'
import '../components/categories.scss'
import '../components/lancamentos.scss'
import '../components/bottomPage.scss'
import '../components/conhecaMais.scss'
import { getProducts } from '../utils';
const MainOne = () => {
    const [navbarBackground, setNavbarBackground] = useState(false);
    const [products, setProducts] = useState(null);
    useEffect(() => {
        getProducts().then(res => {
            setProducts(res);
        }).catch(error => console.log("Erro ao carregar produtos", error));
        const handleScroll = () => {
            const isNavbarBackground = window.scrollY > 0;
            setNavbarBackground(isNavbarBackground);

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    var settingsTopPageSlider = {
        arrows: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    display: 'flex',
                    paddingBottom: '40px',
                    justifyContent: 'space-around'
                }}
            >
                <button className='btnStart'>
                    Conheça Agora
                </button>
                <ul className='dots' style={{ marginLeft: '0px', marginRight: '0px' }}> {dots} </ul>

            </div>
        )


    };
    const settingsLancamentosPageSlider = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1.5,
        swipeToSlide: true,
        arrows: false,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    var settingsConhecaMaisPageSlider = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (

        <>
            <header className='navbar'>
                <nav className={`${navbarBackground ? 'navbar-white' : ''}`}>
                    <div className='icons-left'>
                        <i><FaIcons.FaBars /></i>
                        <i><FaIcons.FaSearch /> </i>
                    </div>
                    <div className='logo-name'>
                        <img src="/static/images/principais/logo-preta.png" alt="logo" />
                    </div>
                    <div className='icons-right'>
                        <i><MdIcons.MdPerson /></i>
                        <i><AiIcons.AiOutlineShopping /> </i>
                    </div>
                </nav>
            </header>
            <body>
                <div className='topPage'>
                    <Slider {...settingsTopPageSlider}>
                        <div className='image-slider'>
                            <img src="/static/images/principais/banner-principal-1.png" alt="" />
                        </div>
                        <div>
                            <img src="/static/images/principais/banner-principal-2.png" alt="" />
                        </div>
                        <div>
                            <img src="/static/images/principais/banner-principal-3.png" alt="" />
                        </div>
                    </Slider>
                </div>
                <h2>Categorias</h2>
                <div className='categoriesPage'>
                    <div className='productDiv'>
                        <img src="/static/images/categorias/banner-botas.png" alt="" />
                        <p>Botas</p>
                    </div>
                    <div className='productDiv'>
                        <img src="/static/images/categorias/banner-sandalias.png" alt="" />
                        <p>Sandalias</p>
                    </div>
                    <div className='productDiv'>
                        <img src="/static/images/categorias/banner-sapatilhas.png" alt="" />
                        <p>Sapatilhas</p>
                    </div>
                    <div className='productDiv'>
                        <img src="/static/images/categorias/banner-scarpins.png" alt="" />
                        <p>Scarpins</p>
                    </div>
                </div >
                <img id='bannerPequeno' src="/static/images/principais/banner-pequeno.png" alt="" />
                <img id='bannerGrande' src="/static/images/principais/banner-grande.png" alt="" />

                <h2 id='lancamento-title'>Lançamentos</h2>
                {products && products.length > 0 ? (
                    <Slider {...settingsLancamentosPageSlider}>
                        {products.map((product) => (
                            <div className='lancamento-page' key={product.id}>
                                <div className='img-lancamento'>
                                    <div className='heart-lancamento'><img src="/static/images/white-heart.png" alt="" /> </div>
                                    <img id='image-product' src={product.image} alt="" />
                                    <div id='img-bottom-info'>
                                        <p> {product.price.isDiscount !== null ?
                                            <span> {Math.abs((((product.price.isDiscount - product.price.amount) / product.price.amount) * 100).toFixed(1))}
                                                % OFF </span>
                                            : ''}
                                        </p>
                                        <span><img src="/static/images/adicionar-carrinho.png" alt="" /></span>
                                    </div>

                                </div>
                                <div className='info-lancamento'>
                                    <p>{product.name}</p>
                                    {product.price.isDiscount !== null ?
                                        <p className='amount'> <span id='discount-number'>R$ {product.price.amount} </span>
                                            <span>  R${product.price.isDiscount}
                                            </span> </p> :
                                        <p className='amount'>   R${product.price.amount} </p>}

                                </div>

                            </div>
                        ))}

                    </Slider>
                ) : (
                    <p>loading</p>
                )}

                <div className='conhecaMaisPage'>
                    <div className='titleConhecaMaisPage'>
                        <h3>Conheça Mais</h3>
                        <p>Fique por dentro de tudo que acontece na Bebecê.</p>
                    </div>

                    <Slider {...settingsConhecaMaisPageSlider}>
                        <div className='slider'>
                            <div className='slider-content'>
                                <img src="/static/images/ConhecaMais/Frame 83 1.png" alt="" />
                                <h2>NOVO LOGO, MESMA ESSÊNCIA.</h2>
                                <p>Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!</p>
                                <a href="">Saiba Mais!</a>
                            </div>
                        </div>
                        <div className='slider'>
                            <div className='slider-content'>
                                <img src="/static/images/ConhecaMais/Frame 83.png" alt="" />
                                <h2>É AMANHÃ</h2>
                                <p>SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️</p>
                                <a href="">Saiba Mais!</a>
                            </div>
                        </div>
                        <div className='slider'>
                            <div className='slider-content'>
                                <img src="/static/images/ConhecaMais/image 5.png" alt="" />
                                <h2>DESCUBRA O GLAMOUR EM CADA PASSO.</h2>
                                <p>Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨</p>
                                <a href="">Saiba Mais!</a>
                            </div>
                        </div>

                    </Slider>
                </div>
            </body>
            <footer className='bottomPage'>

                <img src="/static/images/principais/logo-grande.png" alt="" />
                <div className='apps-logo-container'>
                    <div className='app-logo-item'>
                        <img src="/static/images/logoApps/instagram.png" alt="" />
                    </div>
                    <div className='app-logo-item'>
                        <img src="/static/images/logoApps/facebook.png" alt="" />
                    </div>
                    <div className='app-logo-item'>
                        <img src="/static/images/logoApps/pinterest.png" alt="" />
                    </div>
                    <div className='app-logo-item'>
                        <img src="/static/images/logoApps/twitter.png" alt="" />
                    </div>
                    <div className='app-logo-item'>
                        <img src="/static/images/logoApps/tik-tok.png" alt="" />
                    </div>
                </div>
                <div className='links'>
                    <div className='sobre-empresa'>
                        <p>Sobre a Empresa</p>
                        <a href="">Quem somos</a>
                        <a href="">Fale conosco</a>
                    </div>
                    <div className='politicas'>
                        <p>Politicas</p>
                        <a href="">Política de Privacidade</a>
                        <a href="">Termos de Uso</a>
                        <a href="">Política de Entrega</a>
                        <a href="">Política de Cupom e Descontos</a>
                    </div>
                </div>


            </footer>
        </>

    )
}

export default MainOne