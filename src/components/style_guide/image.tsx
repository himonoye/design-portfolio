import React from 'react';

type imageProps = {
    url: string;
}

export default function Image({url}:imageProps){
    return (
        <div className="image-wrapper">
            <div className="overlay"/>
            <img src={url}/>
        </div>
    )
}