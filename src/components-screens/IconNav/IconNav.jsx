import React from "react";

const IconNav = (icon, textIcon, onClick) => {
    return(
        <div className="icon-style" onClick={onClick}>
            <img src= {icon} alt="" />
            <span>${textIcon}</span>
        </div>
    )
}

export default IconNav;