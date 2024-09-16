import React, { useState }  from 'react';
import { NavLink } from "react-router-dom";
import ThreeDots from '../../icons/threeDots';
import {Menu, Close} from '../../icons/menu';
import Logo from '../../icons/logo';
import linkedIn from '../../../assets/LinkedIn_logo.png'
import instagram from '../../../assets/Instagram_logo.png'
import email from '../../../assets/email.png'

const socialMediaIcons = {"linkedIn":linkedIn, "instagram":instagram}

const HeaderLink = ({linkText, url})  => {
    return (
        <NavLink to={url} className="header-link">
             <ThreeDots className="three-dots-vertical"/>
            {linkText}
        </NavLink>
    )
}

const Footer = ({footerData}) => {
    return (
        <div className="footer-container">
            <div className="social-media-container">
                {footerData.map((item, i)=>{
                    return (
                        <div className="social-media">
                            <a key={i} className="social-media-wrapper" href={item.url}>
                                <img src={socialMediaIcons[item.socialMedia]} alt={item.socialMedia+" Mingxin Ye"}></img>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="body-small">
                ©2024 Built with React
            </div>
        </div>
    )
}

const MobileMenu = ({headerData, footerData}) => {
    return (
        <div className="header-mobile-links-container">
            <div className="header-mobile-links">
                {headerData.map((item, i)=>{
                    return <HeaderLink key={i} url={item.url} linkText={item.linkText}></HeaderLink>
                })}
            </div>
            <Footer footerData={footerData}></Footer>
        </div>
    )
}

const GlobalNav = ({headerData, footerData}) => {
    const [HeaderOpen, setHeaderOpen] = useState(false);
    // onClick={() => {setHeaderOpen(!HeaderOpen)}}
    return (
        <div className="header-container">
            <div className="header-links-container">
                <div className="logo-container">
                    <Logo></Logo>
                </div>
                {headerData.map((item, i)=>{
                    return <HeaderLink key={i} url={item.url} linkText={item.linkText}></HeaderLink>
                })}
            </div>
            <Footer footerData={footerData}></Footer>
        </div>
    )
}

const GlobalMobileNav = ({headerData, footerData}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="header-mobile-container">
            <div className="header-mobile-icon-container" onClick={() => {setMobileMenuOpen(!mobileMenuOpen)}}>
                {mobileMenuOpen?(<Close></Close>):(<Menu></Menu>)}
                {mobileMenuOpen && (<MobileMenu headerData = {headerData} footerData = {footerData}/>)}
            </div>
            <Logo></Logo>
            <a className="header-mobile-icon-container" href="mailto:mingxinye1128@gmail.com">
                <img src={email} alt='email Mingxin Ye'></img>
            </a>
        </div>
    )
}

export {
    GlobalNav,
    GlobalMobileNav
}