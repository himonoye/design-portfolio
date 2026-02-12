import React from 'react';
import Link from 'next/link';

export default function Logo(){
    return (
        <Link href="/" >
            <div className="logo">
                M
            <div className="logo-divider"></div>
                Y
            </div>
         </Link>
    )
}