import React, { useState } from 'react'
import './sidebar.scss'
const Sidebar = ({ showSidebar }) => {
    const [showSubCategory, setShowSubCategory] = useState(false);
    const handleClick = () => {
        
        showSidebar(); 
    };
    const ToggleSubCategory = (e) => {
        e.target.classList.add('active')
        console.log(e.target);
    }
    return (

        <div className='sidebar'>
            <div className='header-sidebar'>
                <img src="/static/images/principais/logo-preta.png" alt="" />
                <span>
                    <img onClick={() => handleClick()} src="/static/images/close-sign.png" alt="" />
                </span>
            </div>
            <div className='image-sidebar'>
                <p>Celebration - 20 Anos</p>
                <a href="">Conheça</a>
            </div>
            <div className='options-sidebar'>
                <ul>
                    <li className="category" onClick={(e) => ToggleSubCategory(e)}>
                        <div className='title-category'>
                            <p>Sapatos</p>
                            <span><img src="/static/images/angulo-direito 1.png" alt="" /></span>
                        </div>

                        <ul className={`${showSubCategory ? 'sub-category' : 'none'}`}>
                            <li>Scarpins</li>
                            <li>Mocassim</li>
                            <li>Sapatilhas</li>
                            <li>Mules</li>
                            <li>Peep Toe</li>
                            <li>Oxford</li>
                        </ul>
                    </li>
                    <li className="category" onClick={() => (e) => ToggleSubCategory(e)}>
                        <div className='title-category'>
                            <p>Sandalias</p>
                            <span><img src="/static/images/angulo-direito 1.png" alt="" /></span>
                        </div>

                        <ul className={`${showSubCategory ? 'sub-category' : 'none'}`}>
                            <li>T-Shirts</li>
                            <li>Polos</li>
                            <li>Dress Shirts</li>
                        </ul>
                    </li>
                    <li className="category" onClick={() => (e) => ToggleSubCategory(e)}>
                        <div className='title-category'>
                            <p>Botas</p>
                            <span><img src="/static/images/angulo-direito 1.png" alt="" /></span>
                        </div>

                        <ul className={`${showSubCategory ? 'sub-category' : 'none'}`}>
                            <li>T-Shirts</li>
                            <li>Polos</li>
                            <li>Dress Shirts</li>
                        </ul>
                    </li>
                    <li className="category" onClick={() => (e) => ToggleSubCategory(e)}>
                        <div className='title-category'>
                            <p>Tênis</p>
                            <span><img src="/static/images/angulo-direito 1.png" alt="" /></span>
                        </div>

                        <ul className={`${showSubCategory ? 'sub-category' : 'none'}`}>
                            <li>T-Shirts</li>
                            <li>Polos</li>
                            <li>Dress Shirts</li>
                        </ul>
                    </li>
                    <li className="category" onClick={() => (e) => ToggleSubCategory(e)}>
                        <div className='title-category'>
                            <p>Outlet</p>
                            <span><img src="/static/images/angulo-direito 1.png" alt="" /></span>
                        </div>

                        <ul className={`${showSubCategory ? 'sub-category' : 'none'}`}>
                            <li>T-Shirts</li>
                            <li>Polos</li>
                            <li>Dress Shirts</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar