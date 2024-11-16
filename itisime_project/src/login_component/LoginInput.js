import './LoginInput.css';

const LoginInput = ({ leftPos, topPos, placeHolder }) => {
    return (
        <input className='LoginInput ibm-plex-sans-kr-regular' style={{left:leftPos, top:topPos}} placeholder={placeHolder}>

        </input>
    );
};

export default LoginInput;