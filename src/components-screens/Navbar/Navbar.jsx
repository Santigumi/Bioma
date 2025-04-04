import IconNav from '../IconNav/IconNav';
import biomaIcon from '../../assets/icons/hoja.svg';
import homeIcon from '../../assets/icons/home.svg';
import journalIcon from '../../assets/icons/journal.svg';
import profileIcon from '../../assets/icons/profile.svg';

const Navbar = () => {

    return(
        <div>
            <ul>
                <li>
                    <IconNav icon = {homeIcon} textIcon = "Home"></IconNav>
                </li>
                <li>
                    <IconNav icon = {biomaIcon} textIcon = "Biomas"></IconNav>
                </li>
                <li>
                    <IconNav icon = {journalIcon} textIcon = "Journal"></IconNav>
                </li>
                <li>
                    <IconNav icon = {profileIcon} textIcon = "Profile"></IconNav>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;