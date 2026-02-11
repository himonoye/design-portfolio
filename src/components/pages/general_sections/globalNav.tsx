import React, { useState }  from 'react';
import { NavLink } from "react-router-dom";
import ThreeDots from '../../icons/threeDots';
import {Menu, Close, ArrowLongRight, ArrowLongLeft} from '../../icons/utilityIcons';
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
            <div className="body-smallest">
                ©2026 Built with Azure & React
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

    const ExpandableClosed = () => {
        return (
            <div className="header-arrow-menu">
                <ArrowLongLeft></ArrowLongLeft>
                <div className="header-expandable-text">Collapse Menu</div>
            </div>
        )
    }

    const ExpandableOpened = () => {
        return (
            <div className="header-arrow-menu">
                <ArrowLongRight></ArrowLongRight>
                <div className="header-expandable-text">Expand Menu</div>
            </div>
        )
    }

    return (
        <div className="header-container">
            <div className={HeaderOpen?"header-expandable-container":"header-expandable-container-shrunk"}>
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
            <div className="header-expandable-icon" onClick={()=>{setHeaderOpen(!HeaderOpen)}}>
                {HeaderOpen?<ExpandableClosed></ExpandableClosed>:<ExpandableOpened></ExpandableOpened>}
            </div>
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
        </div>
    )
}

export {
    GlobalNav,
    GlobalMobileNav
}