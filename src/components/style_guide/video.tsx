import React from 'react';

type videoProps = {
    url: string;
}

export default function Video({url}:videoProps){
    return (
        <div className="video-wrapper">
            <video width="100%" height="" autoPlay muted loop>
                <source src={url} type="video/mp4"></source>
            </video>
        </div>
    )
}