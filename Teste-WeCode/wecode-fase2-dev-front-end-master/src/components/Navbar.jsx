import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"
import '../components/navbar.scss'
import { IconContext } from 'react-icons'
const Navbar = () => {
    return (
        <div className='navbar'>

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

        </div>
    )
}

export default Navbar
