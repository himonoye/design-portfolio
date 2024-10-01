import React from 'react';
import { NavLink } from "react-router-dom";

export type buttonProps = {
    buttonText: string;
    style: "button-primary" | "button-secondary"
    buttonType: "scrollTo" | "link" | "print" | "other";
    url?: string;
    refPointer?: React.MutableRefObject<HTMLInputElement>;
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Button({buttonText, style, url, buttonType, refPointer, onClick}: buttonProps) {

    if (buttonType == "scrollTo" && refPointer) {
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
    } else if ((buttonType == "link") && url){
        return (
            <NavLink to={url} className="button-wrapper">
                    <div className={style}>
                        <div className="button-text-wrapper">
                            {buttonText}
                        </div>
                    </div>
            </NavLink>
        )
    } else if (buttonType == "print"){
        return (
            <div className="button-wrapper" onClick={()=>{window.print();}}>
                    <div className={style}>
                        <div className="button-text-wrapper">
                            {buttonText}
                        </div>
                    </div>
            </div>
        )
    } else {
        return (
            <div className="button-wrapper">
                    <div className={style}>
                        <div className="button-text-wrapper">
                            {buttonText}
                        </div>
                    </div>
            </div>
        )
    }
}