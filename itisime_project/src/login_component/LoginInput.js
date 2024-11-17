import { useCallback, useContext } from 'react';
import './LoginInput.css';
import { LoginContext } from '../App';

const LoginInput = ({ leftPos, topPos, placeHolder }) => {
    const { onEditLoginInfo, loginInfo } = useContext(LoginContext);
    const MemoizedOnChangeEvent = (e) => {
        switch(placeHolder) {
            case '아이디를 입력해주세요.': {
                onEditLoginInfo({id:e.target.value, pwd:loginInfo.pwd});
                break;
            }
            case '비밀번호를 입력해주세요.': {
                onEditLoginInfo({id:loginInfo.id, pwd:e.target.value});
                break;
            }
        }
    };
    return (
        <input className='LoginInput ibm-plex-sans-kr-regular' style={{left:leftPos, top:topPos}} placeholder={placeHolder} onChange={MemoizedOnChangeEvent}>

        </input>
    );
};

export default LoginInput;