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

const ArrowIconLeft = () => {
    return (
        <div className="arrowIcon">
            <svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7L4.75592 2.24408C5.08136 1.91864 5.609 1.91864 5.93443 2.24408C6.25987 2.56951 6.25987 3.09715 5.93443 3.42259L2.35702 7L5.93443 10.5774C6.25987 10.9028 6.25987 11.4305 5.93443 11.7559C5.609 12.0814 5.08136 12.0814 4.75592 11.7559L0 7Z"/>
            </svg>
        </div>
    )
}

const ArrowIconRight = () => {
    return (
        <div className="arrowIcon">
            <svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.17847 7L1.42255 11.7559C1.09711 12.0814 0.569467 12.0814 0.244037 11.7559C-0.0814033 11.4305 -0.0814033 10.9029 0.244037 10.5774L3.82145 7L0.244037 3.4226C-0.0814033 3.0972 -0.0814033 2.5695 0.244037 2.2441C0.569467 1.9186 1.09711 1.9186 1.42255 2.2441L6.17847 7Z"/>
            </svg>
        </div>
    )
}

const ArrowMenuClosed = () => {
    return (
        <div className="arrowIcon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="ffffff"><path d="M378-235 132-481l246-246 19 19-213 213h645v28H185l213 213-20 19Z"/></svg>
        </div>
    )
}

const ArrowMenuOpened = () => {
    return (
        <div className="arrowIcon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="ffffff"><path d="m583-235-20-19 213-213H132v-28h645L564-708l19-19 246 246-246 246Z"/></svg>
        </div>
    )
}

export {
    Menu,
    Close,
    ArrowIconLeft,
    ArrowIconRight,
    ArrowMenuClosed,
    ArrowMenuOpened
}