import React from 'react';

export type VideoProps = {
  url: string;
  poster?: string;
};

export default function Video({ url, poster }: VideoProps) {
  return (
    <div className="video-wrapper">
      <video width="100%" autoPlay muted loop poster={poster} preload="none">
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
}
