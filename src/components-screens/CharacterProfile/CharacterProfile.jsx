    import './CharacterProfile.css';

    const CharacterProfile = ({nameCharacter, imgCharacter}) => {
        return (
            <>
            <div className='profile-container'>
                <div className='title'>
                    <h1>{nameCharacter}</h1>
                </div>
                <div className='img-character'>
                    <img src= {imgCharacter} alt="P" />
                </div>
            </div>

            </>
        );
    };

    export default CharacterProfile;
