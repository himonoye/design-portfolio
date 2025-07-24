import React from 'react';

type imageProps = {
    url: string;
    needsOverlay: boolean;
    altTxt: string;
}

export default function Image({url, needsOverlay, altTxt}:imageProps){
    return (
        <div className="image-wrapper">
            {needsOverlay && <div className="overlay"/>}
            <img src={url} alt={altTxt}/>
        </div>
    )
}