import React from 'react';

export default function Image(url){
    return (
        <div className="hero-image">
            <div className="hero-overlay"/>
            <img src = {url}/>
        </div>
    )
}