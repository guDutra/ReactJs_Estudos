import React, {useEffect, useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"
import '../components/navbar.scss'

const Navbar = () => {

    const [navbarBackground, setNavbarBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isNavbarBackground = window.scrollY > 0;
            setNavbarBackground(isNavbarBackground);
            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='navbar'>
            <nav className={`${navbarBackground ? 'navbar-white' : ''}`}>
                <div className='icons-left'>
                    <i><FaIcons.FaBars /></i>
                    <i><FaIcons.FaSearch /> </i>
                </div>
                <div className='logo-name'>
                    <img src={`${navbarBackground ? '/static/images/principais/logo-preta.png' : '/static/images/principais/Logo.png'} `} alt="logo" />
                </div>
                <div className='icons-right'>
                    <i><MdIcons.MdPerson /></i>
                    <i><AiIcons.AiOutlineShopping /> </i>
                </div>
            </nav>


        </div>
    )
}

export default Navbar
