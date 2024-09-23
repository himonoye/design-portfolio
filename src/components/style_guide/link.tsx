import React from 'react';
import { NavLink } from 'react-router-dom';

type linkProps = {
    linkText: string
    style: "link-primary" | "link-secondary"
    url: string;
    hasRightIcon: boolean;
    hasLeftIcon: boolean;
}

const ArrowIconLeft = () => {
    return (
        <div className="arrowIcon">
            <svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7L4.75592 2.24408C5.08136 1.91864 5.609 1.91864 5.93443 2.24408C6.25987 2.56951 6.25987 3.09715 5.93443 3.42259L2.35702 7L5.93443 10.5774C6.25987 10.9028 6.25987 11.4305 5.93443 11.7559C5.609 12.0814 5.08136 12.0814 4.75592 11.7559L0 7Z"/>
            </svg>
        </div>
    )
}

const ArrowIconRight = () => {
    return (
        <div className="arrowIcon">
            <svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.17847 7L1.42255 11.7559C1.09711 12.0814 0.569467 12.0814 0.244037 11.7559C-0.0814033 11.4305 -0.0814033 10.9029 0.244037 10.5774L3.82145 7L0.244037 3.4226C-0.0814033 3.0972 -0.0814033 2.5695 0.244037 2.2441C0.569467 1.9186 1.09711 1.9186 1.42255 2.2441L6.17847 7Z"/>
            </svg>
        </div>
    )
}

export default function Link({linkText, style, url, hasRightIcon, hasLeftIcon}:linkProps) {
    return (
        <NavLink to={url} className="link-wrapper">
                <div className={style}>
                        {hasLeftIcon?<ArrowIconLeft/>:""}
                        {linkText}
                        {hasRightIcon?<ArrowIconRight/>:""}
                </div>
        </NavLink>
    )
}