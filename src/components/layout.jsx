import React from 'react';
import { Outlet } from "react-router-dom";
import { Header} from './header';
import Footer from './footer';
import "../styles/styleGuide.css";

export default function Layout({headerData}) {
    return (
        <div className="container">
            <Header headerData={headerData}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}