import "./IconNav.css"

const IconNav = ({icon, textIcon}) => {
    return(
        <div className="icon-style">
            <img src= {icon} alt="" />
            <div>
                <span>{textIcon}</span>
            </div>
        </div>
    )
}

export default IconNav;