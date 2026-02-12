import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from '../icons/utilityIcons';

type linkProps = {
    linkText: string
    style: "link-primary" | "link-secondary"
    url?: string;
    hasRightIcon: boolean;
    hasLeftIcon: boolean;
}

export default function LinkComponent({linkText, style, url, hasRightIcon, hasLeftIcon}:linkProps) {
    return (
        <Link href={url ?? "#"} className="link-wrapper">
                <div className={style}>
                    {hasLeftIcon?<ArrowLeft/>:""}
                    {linkText?linkText:""}
                    {hasRightIcon?<ArrowRight/>:""}
                </div>
        </Link>
    )
}