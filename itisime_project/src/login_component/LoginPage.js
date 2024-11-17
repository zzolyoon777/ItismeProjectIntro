import { createContext, useCallback, useState } from 'react';
import LoginInput from './LoginInput';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [_, setPageTwo] = useState(false);

    const navigate = useNavigate();

    function changePageTwo() {
        document.getElementById('page1').classList.remove('activatedPage');
        document.getElementById('page2').classList.add('activatedPage');
        setPageTwo(true); 
        navigate('/enterUserInfo');
    }

    const MemoizedChangePageTwo = useCallback(changePageTwo, []);

    return (
        <div className="LoginPage">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='pageIndexCircle' style={{left:'693px'}}>
                <circle cx="8" cy="8" r="8" fill="#FFFFFF" id='page1' className='activatedPage'/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='pageIndexCircle' style={{right:'696px'}}>
                <circle cx="8" cy="8" r="8" fill="#FFFFFF" id='page2'/>
            </svg>
            <div className='loginTitle elsie-swash-caps-black'>ITISME</div>
            <LoginInput leftPos={'483px'} topPos={'363px'} placeHolder={'아이디를 입력해주세요.'}/>
            <LoginInput leftPos={'483px'} topPos={'462px'} placeHolder={'비밀번호를 입력해주세요.'}/>
            <div id='btnLogin' className='btnLogin' onClick={MemoizedChangePageTwo}>Get Started</div>
        </div>
    );
};

export default LoginPage;