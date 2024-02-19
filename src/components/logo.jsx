import React from 'react';
import { NavLink } from "react-router-dom";

export default function Logo({className}){
    return (
        <NavLink to=".." >
            <div className="logo">
                M
            <div className="logo-divider"></div>
                Y
            </div>
         </NavLink>
    )
}