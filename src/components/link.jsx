import React from 'react';
import { NavLink } from 'react-router-dom';

const ArrowIcon = () => {
    return (
        <div className="arrowIcon">
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7L4.75592 2.24408C5.08136 1.91864 5.609 1.91864 5.93443 2.24408C6.25987 2.56951 6.25987 3.09715 5.93443 3.42259L2.35702 7L5.93443 10.5774C6.25987 10.9028 6.25987 11.4305 5.93443 11.7559C5.609 12.0814 5.08136 12.0814 4.75592 11.7559L0 7Z" fill="#695E75"/>
            </svg>
        </div>
    )
}
export default function Link({linkText, style, url, hasIcon}) {
    return (
        <NavLink to={url}>
            <div className="link-wrapper">
                <div className={style}>
                        {hasIcon?<ArrowIcon/>:""}
                        {linkText}
                </div>
            </div>
        </NavLink>
    )
}