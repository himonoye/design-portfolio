import React from 'react';
import Link from 'next/link';

export type buttonProps = {
    buttonText: string;
    style: "button-primary" | "button-secondary"
    buttonType: "scrollTo" | "navLink" | "externalLink" | "print" | "other";
    url?: string;
    scrollTo?: string;
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Button({buttonText, style, url, buttonType, scrollTo, onClick}: buttonProps) {

    if (buttonType == "scrollTo" && scrollTo) {
        return (
            <div className="button-wrapper" onClick={() => document.getElementById(scrollTo)?.scrollIntoView({behavior: 'smooth',
            block: 'start',
            inline: 'nearest'})}>
                    <div className={style}>
                        <div className="button-text-wrapper">
                            {buttonText}
                        </div>
                    </div>
            </div>
        )
    } else if ((buttonType == "navLink") && url){
        return (
            <Link href={url} className="button-wrapper">
                    <div className={style}>
                        <div className="button-text-wrapper">
                            {buttonText}
                        </div>
                    </div>
            </Link>
        )
    } else if ((buttonType == "externalLink") && url){
        return (
            <a href={url} target="_blank" className="button-wrapper">
                    <div className={style}>
                        <div className="button-text-wrapper">
                            {buttonText}
                        </div>
                    </div>
            </a>
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