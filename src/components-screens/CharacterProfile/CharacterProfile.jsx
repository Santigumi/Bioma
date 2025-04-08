import './CharacterProfile.css';

const CharacterProfile = ({nameCharacter, imgCharacter}) => {
    return (
        <>
        <div className='profile-container'>
            <div>
                <h1>{nameCharacter}</h1>
            </div>
            <div>
                <img src= {imgCharacter} alt="P" />
            </div>
        </div>

        </>
    );
};

export default CharacterProfile;
