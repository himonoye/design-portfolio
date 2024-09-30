import React, { useState }  from 'react';
import { NavLink } from "react-router-dom";
import ThreeDots from '../../icons/threeDots';
import {Menu, Close} from '../../icons/menu';
import Logo from '../../icons/logo';

type headerLinkProps = {
    linkText: string; 
    url: string;
}

type footerProps = {
    footerData:[];
}

type mobileMenuProps = {
    headerData:[];
    footerData:[];
}

type globalNavProps = {
    headerData:[];
    footerData:[];
}

type globalMobileNavProps = {
    headerData:[];
    footerData:[];
}

const HeaderLink = ({linkText, url}:headerLinkProps)  => {
    return (
        <NavLink to={url} className="header-link">
             <ThreeDots className="three-dots-vertical"/>
            {linkText}
        </NavLink>
    )
}

const Footer = ({footerData}:footerProps) => {
    return (
        <div className="footer-container">
            <div className="social-media-container-light">
                {footerData.map((item:any, i:number)=>{
                    return (
                        <div key={i} className="social-media">
                            <a className="social-media-wrapper" href={item.url} target="_blank" >
                                <img src={item.imgUrlDarkMode} alt={item.type + " Mingxin Ye"}></img>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="social-media-container-dark">
                {footerData.map((item:any, i:number)=>{
                    return (
                        <div key={i} className="social-media">
                            <a className="social-media-wrapper" href={item.url} target="_blank">
                                <img src={item.imgUrlLightMode} alt={item.type + " Mingxin Ye"}></img>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="body-small">
                ©2024 Built with Azure & React
            </div>
        </div>
    )
}

const MobileMenu = ({headerData, footerData}:mobileMenuProps) => {
    return (
        <div className="header-mobile-links-container">
            <div className="header-mobile-links">
                {headerData.map((item:any, i:number)=>{
                    return <HeaderLink key={i} url={item.url} linkText={item.linkText}></HeaderLink>
                })}
            </div>
            <Footer footerData={footerData}></Footer>
        </div>
    )
}

const GlobalNav = ({headerData, footerData}:globalNavProps) => {
    const [HeaderOpen, setHeaderOpen] = useState(false);
    // onClick={() => {setHeaderOpen(!HeaderOpen)}}
    return (
        <div className="header-container">
            <div className="header-links-container">
                <div className="logo-container">
                    <Logo></Logo>
                </div>
                {headerData.map((item:any, i:number)=>{
                    return <HeaderLink key={i} url={item.url} linkText={item.linkText}></HeaderLink>
                })}
            </div>
            <Footer footerData={footerData}></Footer>
        </div>
    )
}

const GlobalMobileNav = ({headerData, footerData}:globalMobileNavProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="header-mobile-container">
             <Logo></Logo>
            <div className="header-mobile-icon-container" onClick={() => {setMobileMenuOpen(!mobileMenuOpen)}}>
                {mobileMenuOpen?(<Close></Close>):(<Menu></Menu>)}
                {mobileMenuOpen && (<MobileMenu headerData = {headerData} footerData = {footerData}/>)}
            </div>
            {/* <a className="header-mobile-icon-container" href="mailto:mingxinye1128@gmail.com">
                <img src={imgUrl} alt='email Mingxin Ye'></img>
            </a> */}
        </div>
    )
}

export {
    GlobalNav,
    GlobalMobileNav
}