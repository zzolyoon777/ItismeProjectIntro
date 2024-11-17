import { useContext } from "react";
import { UserInfoContext } from "../App";

const EnterUserInfoItem = ({className, placeHolder}) => {
    const { onEditUserInfo, userInfo } = useContext(UserInfoContext);
    function editUserInfo(e) {
        switch(placeHolder) {
            case "Name": {
                onEditUserInfo({userName: e.target.value, birth: userInfo.birth, oneDetail: userInfo.oneDetail, details: userInfo.details});
                break;
            }
            case "2004-12-13": {
                onEditUserInfo({userName: userInfo.userName, birth: e.target.value, oneDetail: userInfo.oneDetail, details: userInfo.details});
                break;
            }
            case "Intro Line 1": {
                onEditUserInfo({userName: userInfo.userName, birth: userInfo.birth, oneDetail: e.target.value, details: userInfo.details});
                break;
            }
            case "Detailed Intro": {
                onEditUserInfo({userName: userInfo.userName, birth: userInfo.birth, oneDetail: userInfo.oneDetail, details: e.target.value});
                break;
            }
        }
    }
    return <input className={`inputs ${className} elsie-swash-caps-black`} placeholder={placeHolder} onChange={editUserInfo}/>;
};

export default EnterUserInfoItem;