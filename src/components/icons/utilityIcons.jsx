import React from 'react';

const LogoBox = () => {
    return (
        <div id="logoBox">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" fill="#333333"/>
<path d="M13.6498 48.5H13.1875L16.2817 23.5H17.4553L24.924 46.6071L32.3572 23.5H33.5308L36.625 48.5H33.6731L31.2191 28.5L24.7818 48.5H22.5412L16.0327 28.75L13.6498 48.5Z" fill="white"/>
<path d="M58.1221 23.5C58.5824 23.9524 58.8125 24.5357 58.8125 25.25C58.8125 25.8452 58.6793 26.4524 58.4128 27.0714L51.9084 40.0357V48.5H48.8924V40.8214L41.625 23.5H44.7137L51.6541 39.6071L57.9767 27.0714C58.2432 26.4762 58.3765 25.8571 58.3765 25.2143C58.3765 24.5714 58.1948 24.0714 57.8314 23.7143L58.1221 23.5Z" fill="white"/>
</svg>
        </div>
    )
} 

const Menu = () => {
    return(
        <div className="menu">
            <div className="menu-line-1"></div>
            <div className="menu-line-2"></div>
            <div className="menu-line-3"></div>
        </div>
    )
}

const Close = () => {
    return(
        <div className="close">
            <div className="close-line-1"></div>
            <div className="close-line-2"></div>
            <div className="close-line-3"></div>
        </div>
    )
}

const ArrowLeft = () => {
    return (
        <div className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M560-276 356-480l204-204 20 20-184 184 184 184-20 20Z"/></svg>
        </div>
    )
}

const ArrowRight = () => {
    return (
        <div className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/></svg>
        </div>
    )
}

const ArrowLongRight = () => {
    return (
        <div className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="m583-235-20-19 213-213H132v-28h645L564-708l19-19 246 246-246 246Z"/></svg>
        </div>
    )
}

const ArrowLongLeft = () => {
    return (
        <div className="arrow-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M378-235 132-481l246-246 19 19-213 213h645v28H185l213 213-20 19Z"/></svg>
        </div>
    )
}

const InfoIcon = () => {
    return (
      <div className="info-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M466-306h28v-214h-28v214Zm14-264q8.5 0 14.25-5.75T500-590q0-8.5-5.75-14.25T480-610q-8.5 0-14.25 5.75T460-590q0 8.5 5.75 14.25T480-570Zm.17 438q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      </div>
    )
}

export {
    Menu,
    Close,
    ArrowLeft,
    ArrowRight,
    ArrowLongLeft,
    ArrowLongRight,
    InfoIcon,
    LogoBox
}