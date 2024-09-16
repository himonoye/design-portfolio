import React from 'react';
import DefaultHero from '../general_sections/defaultHero';
import outsideImg1 from '../../../assets/imgs/outsideDesign/outside-design-image-1.png'
import outsideImg2 from '../../../assets/imgs/outsideDesign/outside-design-image-2.png'
import outsideImg3 from '../../../assets/imgs/outsideDesign/outside-design-image-3.png'
import outsideImg4 from '../../../assets/imgs/outsideDesign/outside-design-image-4.png'
import outsideImg5 from '../../../assets/imgs/outsideDesign/outside-design-image-5.png'
import outsideImg6 from '../../../assets/imgs/outsideDesign/outside-design-image-6.png'
import outsideImg7 from '../../../assets/imgs/outsideDesign/outside-design-image-7.png'
import outsideImg8 from '../../../assets/imgs/outsideDesign/outside-design-image-8.png'
import outsideImg9 from '../../../assets/imgs/outsideDesign/outside-design-image-9.png'
import outsideImg10 from '../../../assets/imgs/outsideDesign/outside-design-image-10.png'
import outsideImg11 from '../../../assets/imgs/outsideDesign/outside-design-image-11.png'
import outsideImg12 from '../../../assets/imgs/outsideDesign/outside-design-image-12.png'

const gallery = [outsideImg1,outsideImg2, outsideImg3, outsideImg4, outsideImg5, outsideImg6, outsideImg7, outsideImg8, outsideImg9, outsideImg10, outsideImg11, outsideImg12]

export default function About({pageData}) {
    return (
        <div className="body-container">
            <DefaultHero 
                pageTitle={pageData.title}
                pageDescription={pageData.description}
                buttonText1={pageData.buttonText1}
                buttonUrl1={pageData.buttonUrl1}
                buttonText2={pageData.buttonText2}
                buttonUrl2={pageData.buttonUrl2}
                buttonText3={pageData.buttonText3}
                buttonUrl3={pageData.buttonUrl3}
            ></DefaultHero>
            <div className="content-container">
                <div className="gallery-container">
                    {gallery.map((item, k)=>{
                        if (k % 3 == 0){
                            return (
                                <div className="img-gallery-col">
                                    <img src = {gallery[k]}/>
                                    <img src = {gallery[k+1]}/>
                                    <img src = {gallery[k+2]}/>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}