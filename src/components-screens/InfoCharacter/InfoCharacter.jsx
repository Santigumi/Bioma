import './InfoCharacter.css';

const InfoCharacter = ({username, charactersFound}) => {
    return (
        <>
            <div className='info-container'>
                <div className='username-section'>
                    <h2>{username}</h2>
                </div>
                <div info-character-section>
                    <div className='stats-container'>
                        <div className='found-section'>
                            <img src= {charactersFound} alt="" />
                            <p>1/9 characters found</p>      
                        </div>
                        <div className='right-stats'>
                            <div className='played-hours'>
                                2:50 played hours
                            </div>
                            <div className='cards-found'>
                                <p>46/100 cards found</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoCharacter;
