import './InfoCharacter.css';

const InfoCharacter = ({username, charactersFound}) => {
    return (
        <>
        <div>
            <div>
                <h2>{username}</h2>
            </div>
            <div>
                <img src="" alt="" />
                <p>1/9 characters found</p>      
            </div>
            <div>
                2:50 played hours
            </div>
            <div>
                <p>46/100 cards found</p>
            </div>
        </div>
        </>
    );
};

export default InfoCharacter;
