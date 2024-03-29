import React from 'react';
import { NavLink } from "react-router-dom";

export default function Button({buttonText, style, url, type, refPointer}) {
    
    if (type == "scrollTo") {
        return (
            <div className="button-wrapper" onClick={() => refPointer.current.scrollIntoView({behavior: 'smooth',
            block: 'start',
            inline: 'nearest'})}>
                    <div className={style}>
                        <div className="button-text-wrapper">
                            {buttonText}
                        </div>
                    </div>
            </div>
        )
    } else {
        return (
            <NavLink to={url}>
                <div className="button-wrapper">
                    <div className={style}>
                        <div className="button-text-wrapper">
                            {buttonText}
                        </div>
                    </div>
                </div>
            </NavLink>
        )
    } 
}