import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../../abletonLogo.svg'

const Header = ()=>{
    const location = useLocation();
    return(
       
        <div>
            <ul className="headerUl">
                <li className = {location.pathname === "/" ? "headerLi status" : "headerLi"}><Link to ="/"  ><img src={logo} /></Link></li>
                <li className = {location.pathname === "/Live" ? "headerLi status" : "headerLi"}><Link to ="/Live/Live12"  >Live</Link></li>
                <li className = {location.pathname === "/Push" ? "headerLi status" : "headerLi"}><Link to ="/Push/OverView"  >Push</Link></li>
                <li className = {location.pathname === "/Note" ? "headerLi status" : "headerLi"}><Link to ="/Note"  >Note</Link></li>
                <li className = {location.pathname === "/Link1" ? "headerLi status" : "headerLi"}><Link to ="/Link1/WhatIsLink"  >Link</Link></li>
                <li className = {location.pathname === "/Shop" ? "headerLi status" : "headerLi"}><Link to ="/Shop/OverView"  >shop</Link></li>
                <li className = {location.pathname === "/Packs" ? "headerLi status" : "headerLi"}><Link to ="/Packs"  >Packs</Link></li>
                <li className = {location.pathname === "/Help" ? "headerLi status" : "headerLi"}><Link to ="/Help/OverView"  >Help</Link></li>
                <li className = {location.pathname === "/More" ? "headerLi status" : "headerLi"}><Link to ="/More"  >More +</Link></li>
                <li className = {location.pathname === "/Live12" ? "headerLi status mLeft" : "headerLi mLeft"}><Link to ="/Live12"  >Try Live 12 for free</Link></li>
                <li className = {location.pathname === "/Login" ? " status text" : "text"}><Link to ="/Login"  >Log in or register</Link></li>
            </ul>
        </div>
    )
}

export default Header;