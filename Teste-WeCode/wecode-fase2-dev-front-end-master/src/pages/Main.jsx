import React from 'react'
import  NavbarComponent  from '../components/Navbar'
import TopPageComponent from '../components/TopPage'
import CategoriesComponent from '../components/Categories'
import LancamentosComponent from '../components/Lancamentos'
import ConhecaMaisComponent from '../components/ConhecaMais'
import BottomPageComponent from '../components/BottomPage'
import '../App.scss'
export const Main = () => {
    return (
        <>
            <div>
                <NavbarComponent/>
                <TopPageComponent/>
                <CategoriesComponent/>
                <img id='bannerPequeno' src="/static/images/principais/banner-pequeno.png" alt="" />
                <img id='bannerGrande' src="/static/images/principais/banner-grande.png" alt="" />
                <LancamentosComponent/>
                <ConhecaMaisComponent/> 
                <BottomPageComponent/>
            </div>
        </>
    )
}
