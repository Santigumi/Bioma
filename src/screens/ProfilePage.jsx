import Navbar from '../components-screens/Navbar/Navbar';
import LevelProgress from '../components-screens/LevelProgress/LevelProgress';
import InfoCharacter from '../components-screens/InfoCharacter/InfoCharacter';
import CharacterProfile from '../components-screens/CharacterProfile/CharacterProfile';
import Capi from '../assets/characters/Capi.png';
import backgroundImage from '../assets/backgrounds/fondoregister.jpg';
import 

const ProfilePage = () => {
    return(
        <>
            <div className='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
                {/* <Navbar backgroundColor= "rgba(237, 124, 124, 1)"></Navbar> */}
                <CharacterProfile nameCharacter = "Capybara" imgCharacter={Capi} ></CharacterProfile>
                <InfoCharacter username = "Capysanti" charactersFound={Capi}></InfoCharacter>
                <LevelProgress></LevelProgress>
            </div>
        </>
    )
}

export default ProfilePage;