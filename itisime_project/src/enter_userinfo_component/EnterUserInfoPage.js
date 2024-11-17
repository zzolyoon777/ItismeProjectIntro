import { useNavigate } from 'react-router-dom';
import './EnterUserInfoPage.css';
import EnterUserInfoItem from './EnterUserInfoItem';

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
            <EnterUserInfoItem className={"inputName"} placeHolder={"Name"} />
            <EnterUserInfoItem className={"inputBirth"} placeHolder={"2004-12-13"} />
            <EnterUserInfoItem className={"inputOneDetail"} placeHolder={"Intro Line 1"} />
            <EnterUserInfoItem className={"inputDetails"} placeHolder={"Detailed Intro"}/>
            <div className='buttonUserInfo elsie-swash-caps-black' onClick={() => {navigate('/main')}}>Enter GoGo</div>
        </div>
    );
};

export default EnterUserInfoPage;