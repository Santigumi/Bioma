import Navbar from '../components-screens/Navbar/Navbar';
import LevelProgress from '../components-screens/LevelProgress/LevelProgress';
import InfoCharacter from '../components-screens/InfoCharacter/InfoCharacter';
import CharacterProfile from '../components-screens/CharacterProfile/CharacterProfile';
import Capi from '../assets/characters/Capi.png';
import backgroundImage from '../assets/backgrounds/fondoregister.jpg';
import tree from '../assets/icons/tree-pine.png';
import rail from '../assets/icons/rail-symbol.png' 
import palm from '../assets/icons/tree-palm.png';
import atom from '../assets/icons/atom.png';
import sprout from '../assets/icons/sprout.png';
import sailboat from '../assets/icons/sailboat.png';


const ProfilePage = () => {
    return(
        <>
            <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Navbar backgroundColor= "rgba(237, 124, 124, 1)" hoverColor= "rgba(225, 67, 67, 1)" ></Navbar>
                <div>
                    <CharacterProfile nameCharacter = "Capybara" imgCharacter={Capi} ></CharacterProfile>
                </div>
                <div>
                    <InfoCharacter username = "Capysanti" charactersFound={Capi}></InfoCharacter>
                </div>
                <div>
                    <LevelProgress iconProgress = {tree} percentage = "96%"></LevelProgress>
                    <LevelProgress iconProgress = {tree} percentage = "45%" color= "rgba(255, 228, 67, 1)"></LevelProgress>
                    <LevelProgress iconProgress = {sprout} percentage = "0%"></LevelProgress>
                    <LevelProgress iconProgress = {palm} percentage = "16%" color= "rgba(255, 228, 67, 1)"></LevelProgress>
                    <LevelProgress iconProgress = {tree} percentage = "5%" color= "rgba(0, 141, 213, 1)"></LevelProgress>
                    <LevelProgress iconProgress = {sailboat} percentage = "15%" color= "rgba(71, 193, 255, 1)"></LevelProgress>                    <LevelProgress iconProgress = {tree} percentage = "5%" color= "rgba(0, 141, 213, 1)"></LevelProgress>
                    <LevelProgress iconProgress = {rail} percentage = "0%" color= "rgba(71, 193, 255, 1)"></LevelProgress>
                    <LevelProgress iconProgress = {atom} percentage = "0%" color= "rgba(0, 141, 213, 1)"></LevelProgress>
                </div>

            </div>
        </>
    )
}

export default ProfilePage;