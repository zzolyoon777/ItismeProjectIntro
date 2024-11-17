import './MainPageItem.css';

const MainPageItem = ({ userName, birth, oneDetail, details, color }) => {
    console.log(color);
    return (
        <div className='MainPageItem' style={{backgroundColor:color, boxShadow: `10px -10px 20px ${color}`}}>
            <p>{userName + " " + birth + " " + oneDetail + " " + details}</p>
        </div>
    );
};

export default MainPageItem;