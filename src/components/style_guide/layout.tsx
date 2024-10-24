import React from 'react';
import { Outlet } from "react-router-dom";
import { GlobalNav, GlobalMobileNav} from '../pages/general_sections/globalNav';
import "../../styles/styleGuide.css";

type LayoutProps = {
    headerData: [];
    footerData: [];
}

export default function Layout({headerData, footerData}:LayoutProps) {
    return (
        <div className="container">
            <GlobalNav headerData={headerData} footerData={footerData}/>
            <GlobalMobileNav headerData={headerData} footerData={footerData}/>
            <Outlet/>
        </div>
    )
}