import React from 'react';
import DefaultHero from '../general_sections/defaultHero';

type outsideWorkProps = {
    pageData: any;
    gallery: [];
}

export default function OutsideWork({pageData, gallery}:outsideWorkProps) {
    return (
        <div className="body-container">
            <DefaultHero 
                pageTitle={pageData.title}
                pageDescription={pageData.description}
                buttonGroup={pageData.buttonGroup}
                scrollRef={pageData.scrollRef}
            ></DefaultHero>
            <div className="content-container">
                <div className="gallery-container">
                    {gallery.map((item, k)=>{
                        if (k % 3 == 0){
                            return (
                                <div className="img-gallery-col">
                                    <img className="img-gallery-img" key={k} src = {gallery[k]}/>
                                    <img className="img-gallery-img" key={k+1} src = {gallery[k+1]}/>
                                    <img className="img-gallery-img" key={k+2} src = {gallery[k+2]}/>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="gallery-container-mobile">
                    {gallery.map((item, k)=>{
                        if (k % 6 == 0){
                            return (
                                <div className="img-gallery-col">
                                    <img className="img-gallery-img" key={k} src = {gallery[k]}/>
                                    <img className="img-gallery-img" key={k+1} src = {gallery[k+1]}/>
                                    <img className="img-gallery-img" key={k+2} src = {gallery[k+2]}/>
                                    <img className="img-gallery-img" key={k+2} src = {gallery[k+3]}/>
                                    <img className="img-gallery-img" key={k+2} src = {gallery[k+4]}/>
                                    <img className="img-gallery-img" key={k+2} src = {gallery[k+5]}/>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}