import React from 'react';

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

export {
    Menu,
    Close,
    ArrowLeft,
    ArrowRight,
    ArrowLongLeft,
    ArrowLongRight
}