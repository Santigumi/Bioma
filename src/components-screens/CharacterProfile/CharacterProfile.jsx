import './CharacterProfile.css';

const CharacterProfile = ({nameCharacter, imgCharacter}) => {
    return (
        <>
        <div>
            <h1>{nameCharacter}</h1>
            <div>
                <img src= {imgCharacter} alt="P" />
            </div>
        </div>

        </>
    );
};

export default CharacterProfile;
