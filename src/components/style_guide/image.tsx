import React from 'react';

type imageProps = {
    url: string;
    needsOverlay: boolean;
}

export default function Image({url, needsOverlay}:imageProps){
    return (
        <div className="image-wrapper">
            {needsOverlay && <div className="overlay"/>}
            <img src={url}/>
        </div>
    )
}