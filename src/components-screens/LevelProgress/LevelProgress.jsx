import './LevelProgress.css';

const LevelProgress = ({iconProgress, percentage, color}) => {
    return (
        <>
        <div className='progress-div' style = {{backgroundColor: color || `rgba(10, 191, 100, 1)`}}>
            <img src = {iconProgress} alt="" />
            <p>{percentage}</p>
        </div>
        </>
    );
};

export default LevelProgress;
