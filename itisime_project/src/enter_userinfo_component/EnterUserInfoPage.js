import { useNavigate } from 'react-router-dom';
import './EnterUserInfoPage.css';

const EnterUserInfoPage = () => {
    const navigate = useNavigate();
    return (
        <div className="EnterUserInfoPage">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='pageIndexCircle' style={{left:'693px'}}>
                <circle cx="8" cy="8" r="8" fill="#FFFFFF" id='page1'/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='pageIndexCircle' style={{right:'696px'}}>
                <circle cx="8" cy="8" r="8" fill="#FFFFFF" id='page2' className="activatedPage"/>
            </svg>
            <div className='loginTitle elsie-swash-caps-black' style={{top:'169px', left:'540px'}}>ITISME</div>
            <input className="inputs inputName elsie-swash-caps-black" placeholder='Name'/>
            <input className="inputs inputBirth elsie-swash-caps-black" placeholder='2004-12-13'/>
            <input className='inputs inputOneDetail elsie-swash-caps-black' placeholder='Intro Line 1'/>
            <textarea className='inputs inputDetails elsie-swash-caps-black' placeholder='Detailed Intro'/>
            <div className='buttonUserInfo elsie-swash-caps-black' onClick={() => {navigate('/main')}}>Enter GoGo</div>
        </div>
    );
};

export default EnterUserInfoPage;