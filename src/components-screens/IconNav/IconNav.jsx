import "./IconNav.css"

const IconNav = ({icon, textIcon, onClick}) => {
    return(
        <div className="icon-style" onClick={onClick}>
            <img src= {icon} alt="" />
            <div>
                <span>{textIcon}</span>
            </div>
        </div>
    )
}

export default IconNav;