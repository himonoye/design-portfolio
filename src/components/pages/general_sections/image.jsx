import React from 'react';

export default function Image(url){
    return (
        <div className="image-wrapper">
            <div className="overlay"/>
            <img src = {url}/>
        </div>
    )
}