import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowIconLeft, ArrowIconRight } from '../icons/utilityIcons';

type linkProps = {
    linkText: string
    style: "link-primary" | "link-secondary"
    url?: string;
    hasRightIcon: boolean;
    hasLeftIcon: boolean;
}

export default function Link({linkText, style, url, hasRightIcon, hasLeftIcon}:linkProps) {
    return (
        <NavLink to={url} className="link-wrapper">
                <div className={style}>
                        {hasLeftIcon?<ArrowIconLeft/>:""}
                        {linkText?linkText:""}
                        {hasRightIcon?<ArrowIconRight/>:""}
                </div>
        </NavLink>
    )
}