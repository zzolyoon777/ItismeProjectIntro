import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './login_component/LoginPage';
import EnterUserInfoPage from './enter_userinfo_component/EnterUserInfoPage';
import MainPage from './main_component/MainPage';
import { createContext, useCallback, useState } from 'react';

export const LoginContext = createContext();

export const UserInfoContext = createContext();

function App() {
  const [loginInfo, setLoginInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});

  function onEditLoginInfo(editedLoginInfo) {
    setLoginInfo(editedLoginInfo);
  }

  function onEditUserInfo(editedUserInfo) {
    setUserInfo(editedUserInfo);
  }

  const MemoizedOnEditLoginInfo = useCallback(onEditLoginInfo, []);
  const MemoizedOnEditUserInfo = useCallback(onEditUserInfo, []);

  return (
    <div className='App'>
      <LoginContext.Provider value={{onEditLoginInfo:MemoizedOnEditLoginInfo, loginInfo:loginInfo}}>
        <UserInfoContext.Provider value={{onEditUserInfo:MemoizedOnEditUserInfo, userInfo:userInfo}}>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/enterUserInfo' element={<EnterUserInfoPage />} />
            <Route path='/main' element={<MainPage oneDetail={userInfo.oneDetail}/>} />
          </Routes>
        </UserInfoContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
