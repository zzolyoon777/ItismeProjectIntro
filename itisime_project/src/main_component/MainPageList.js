import { useContext } from 'react';
import MainPageItem from './MainPageItem';
import './MainPageList.css';
import { UserInfoContext } from '../App';

const colors = [
    "#3C3D37",
    "#697565",
    "#373A40",
    "#686D76"
];

const MainPageList = () => {
    const { userInfo } = useContext(UserInfoContext);
    const mockData = [userInfo, userInfo, userInfo, userInfo, userInfo];
    return (
        <div className="MainPageList">
            {mockData.map((it) => {
                return <MainPageItem userName={it.userName} birth={it.birth} oneDetail={it.oneDetail} details={it.details} color={colors[Math.floor(Math.random() * 10) % 4]}/>
            })}
        </div>
    );
};

export default MainPageList;