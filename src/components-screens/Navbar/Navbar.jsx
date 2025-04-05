import IconNav from '../IconNav/IconNav';
import biomaIcon from '../../assets/icons/hoja.svg';
import homeIcon from '../../assets/icons/home.svg';
import journalIcon from '../../assets/icons/journal.svg';
import profileIcon from '../../assets/icons/profile.svg';
import "./Navbar.css"
const Navbar = () => {

    return(
        <div className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <IconNav icon = {homeIcon} textIcon = "Home"></IconNav>
                </li>
                <li className='navbar-item'>
                    <IconNav icon = {biomaIcon} textIcon = "Biomas"></IconNav>
                </li>
                <li className='navbar-item'>
                    <IconNav icon = {journalIcon} textIcon = "Journal"></IconNav>
                </li>
                <li className='navbar-item'>
                    <IconNav icon = {profileIcon} textIcon = "Profile"></IconNav>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;