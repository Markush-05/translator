import React from 'react';
import {NavLink } from 'react-router-dom'
import { TRANSLAT_ROUTE, LOGINE_ROUTE, LIST_ROUTE,REGISTRATION_ROUTE,ClOSE_ROUTE } from '../../utils/const';

import './navbar.scss';

const navPublicData = [
    {
        path: '/',
        name: 'Головна'
    },
    {
        path: REGISTRATION_ROUTE,
        name: 'Реєстрація'
    },
    {
        path: LOGINE_ROUTE,
        name: 'Увійти'
    },
]

const navPrivateData = [
    {
        path: '/',
        name: 'Головна'
    },
    {
        path: TRANSLAT_ROUTE,
        name: 'Перекладач'
    },
    {
        path: LIST_ROUTE,
        name: 'Список'
    },
    // {
    //     path: ClOSE_ROUTE,
    //     name: 'Вийти'
    // },
]




const Navbar = ({navPrivate,updatLest}) => {
    const buttonClouse = <li key={"Вийти"} className="navbar__items"><button onClick={()=> updatLest()} >Вийти</button></li>

    const navItem = navPrivate ? [... navPrivateData.map(({name,path})=> <li key={name} className="navbar__items"><NavLink to={path}>{name}</NavLink></li>),buttonClouse] :  //
                                 navPublicData.map(({name,path})=> <li key={name} className="navbar__items"><NavLink to={path}>{name}</NavLink></li>)

    return (
        <nav className="navbar">

            <ul className="navbar__list">
                
                {navItem}
                
                
            </ul>

        </nav>

    )

}

export default Navbar ;