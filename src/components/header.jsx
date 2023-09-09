import React, { useState }  from 'react';
import { NavLink } from "react-router-dom";
import ThreeDots from './threeDots';
import Menu from './menu';

const Logo = () => {
    return (
        <NavLink to=".." ><div className="logo lead">M<div className="logo-divider"></div>Y</div></NavLink>
    )
}

const HeaderLink = ({linkText, url})  => {
    return (
        <NavLink to={url} className="header-link">
             <ThreeDots className="three-dots-vertical"/>
            {linkText}
        </NavLink>
    )
}

const MobileMenu = ({headerData}) => {
    return (
        <div className="header-mobile-menu-container">
            <div className="header-mobile-menu">
                {headerData.map((item, i)=>{
                    return <HeaderLink key={i} url={item.url} linkText={item.linkText}></HeaderLink>
                })}
            </div>
        </div>
    )
}

const Header = ({headerData}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="header-container">
            <Logo></Logo>
            <div className="header-menu-container" onClick={() => {setMobileMenuOpen(!mobileMenuOpen)}}>
                <Menu></Menu>
                {mobileMenuOpen && (<MobileMenu headerData = {headerData}/>)}
            </div>
            <div className="header-link-container">
                {headerData.map((item, i)=>{
                    return <HeaderLink key={i} url={item.url} linkText={item.linkText}></HeaderLink>
                })}
            </div>
        </div>
    )
}

export {
    Header
}