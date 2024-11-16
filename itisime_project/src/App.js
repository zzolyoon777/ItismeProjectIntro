import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './login_component/LoginPage';
import EnterUserInfoPage from './enter_userinfo_component/EnterUserInfoPage';
import MainPage from './main_component/MainPage';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/enterUserInfo' element={<EnterUserInfoPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
