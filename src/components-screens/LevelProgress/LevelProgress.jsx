import './LevelProgress.css';

const LevelProgress = ({iconProgress, percentage, color}) => {
    return (
        <>
        <div>
            <img src = {iconProgress} alt="" />
            <p>{percentage}</p>
        </div>
        </>
    );
};

export default LevelProgress;
