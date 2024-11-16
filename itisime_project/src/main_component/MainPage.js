import './MainPage.css';
import MainPageList from './MainPageList';

const MainPage = () => {
    return (
        <div className="MainPage">
            <img className="profileImg" />
            <div className='introOneDetail'>안녕하세요,<br />정조윤입니다.</div>
            <div className='divider' />
            <svg xmlns="http://www.w3.org/2000/svg" width="1406" height="6" viewBox="0 0 1406 6" fill="none" className='divider'>
                <path d="M0.5 3H1406" stroke="white" stroke-width="5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="458" viewBox="0 0 5 458" fill="none" className='wall1'>
                <path d="M2.5 0.5V457.5" stroke="white" stroke-width="5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="458" viewBox="0 0 5 458" fill="none" className='wall2'>
                <path d="M2.5 0.5V457.5" stroke="white" stroke-width="5" />
            </svg>
            <MainPageList />
        </div>
    );
};

export default MainPage;