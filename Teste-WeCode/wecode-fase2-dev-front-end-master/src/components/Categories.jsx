import React from 'react'
import './categories.scss'
const Categories = () => {

    return (
        <>
            <h2>FERFEFREFER</h2>
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
        </>

    )
}

export default Categories