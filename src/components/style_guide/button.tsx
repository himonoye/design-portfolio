import React from 'react';
import { NavLink } from "react-router-dom";

export type buttonProps = {
    buttonText: string;
    style: "button-primary" | "button-secondary"
    type: "scrollTo" | "link";
    url?: string;
    refPointer?: any;
};

export default function Button({buttonText, style, url, type, refPointer}: buttonProps) {
    
    if (type == "scrollTo" && refPointer) {
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
    } else if (type == "link" && url){
        return (
            <NavLink to={url} className="button-wrapper">
                    <div className={style}>
                        <div className="button-text-wrapper">
                            {buttonText}
                        </div>
                    </div>
            </NavLink>
        )
    } 
}