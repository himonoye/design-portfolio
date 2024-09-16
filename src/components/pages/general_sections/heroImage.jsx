import React from 'react';
import heroImage from '../../../assets/imgs/project-trane-search.png'

export default function HeroImage(){
    return (
        <div className="hero-image">
            <div className="hero-overlay"/>
            <img src = {heroImage}/>
        </div>
    )
}