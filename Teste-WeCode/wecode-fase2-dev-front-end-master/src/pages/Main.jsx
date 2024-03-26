import React from 'react'
import ProductsComponent from '../components/Products'
import  NavbarComponent  from '../components/Navbar'
import TopPageComponent from '../components/TopPage'
export const Main = () => {
    return (
        <>
            <div>
                <NavbarComponent/>
                <TopPageComponent/>
            </div>
        </>

    )
}
