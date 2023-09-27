import React from "react";
// import icon from '../../Images/LoginIcon.png'
// import GoogleIcon from '../../Images/google_icon.png' 
// import AppleIcon from '../../Images/apple_icon.png'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/Slice";
import { googleResponse } from "../../API/API";


// const googleResponse =async(dataCre)=>{
//   const {data} = await axios.post('http://localhost:5000/auth/google/',dataCre)
//   localStorage.setItem('auth',JSON.stringify(data?.token))

// }


function Google() {
    const navigate = useNavigate()

      const dispatch =useDispatch()
    // const {login,setLogin} =useContext(AuthContext)
    //r
    return (
        <>
            <GoogleOAuthProvider clientId="572559618246-c7c7eo18rgj40uvardjue8j5dp6obuer.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={async (credentialResponse) => {
                        try {
                            const { data } = await googleResponse(credentialResponse);
                            localStorage.setItem("auth", JSON.stringify(data.token));
                            if (data) {
                                // console.log(data)
                                  dispatch(setToken(data?.token))
                                // navigate('/')

                            }
                        } catch (err) {
                            console.log(err);
                        }
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </>
    )
}

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                    className="bg-custom-blue p-4 m-5 items-center relative overflow-hidden"
                    style={{ borderRadius: "2rem" }}
                >
                    <div className="flex justify-center sm:justify-start">
                        <img
                            src={"data:image/png;base64,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"}
                            alt="Logo"
                            width={263}
                            height={56.53082}
                            className="mt-10 ml-10 relative z-10"
                        />
                    </div>

                    <div className="absolute top-[calc(50%-_476px)] left-[36px] w-[674px] h-[952px] opacity-[0.5] ">
                        <div className="absolute top-[-276px] left-[0px] w-[1370.78px] h-[1398.2px]">
                            <div className="absolute top-[751.62px] left-[75px] [background:linear-gradient(252.72deg,_rgba(147,_147,_241,_1),_rgba(145,_145,_250,_0.05))] [backdrop-filter:blur(104px)] w-[50%] h-[7%] [transform:_rotate(-40deg)] [transform-origin:0_0] " />
                            <div className="absolute top-[1311.67px] left-[160px] [background:linear-gradient(68.6deg,_rgba(137,_170,_255,_1),_rgba(145,_145,_250,_0.05))] [backdrop-filter:blur(104px)] w-[847.13px] h-[7%] [transform:_rotate(-40deg)] [transform-origin:0_0]" />
                            <div className="absolute top-[705.61px] left-[426px] [background:linear-gradient(252.82deg,_rgba(137,_170,_255,_1),_rgba(145,_145,_250,_0.05))] [backdrop-filter:blur(104px)] w-[847.13px] h-[7%] [transform:_rotate(-40deg)] [transform-origin:0_0]" />
                        </div>
                    </div>

                    <div
                        className="text-4xl font-medium font-helvetica-neue text-white inline-block w-90/100 ml-10 mb-10"
                        style={{ paddingTop: "40%" }}
                    >
                        {" "}
                        <p className="mb-10 text-[30px]">
                            Rorem ipsum <br /> dolor sit amet,cons
                        </p>
                        <p className="text-[18px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                            exercitationem.
                        </p>
                    </div>
                </div>
                <div className="p-10px m-10 flex justify-center items-center">
                    <div className="m-2">
                        <div className="relative text-[40px] capitalize font-medium font-helvetica-neue text-black-1 text-left">
                            <b> Get Started now </b>
                            <p className="relative text-[20px] font-helvetica-neue text-black-body text-left">
                                Enter your credentials to access the account
                            </p>
                        </div>
                        <form action="" className="mt-10">
                            <div className="flex flex-col sm:flex-row">
                                <button
                                    // onClick={() => signIn()}
                                    className="relative rounded-xl box-border w-full flex flex-row py-3.5 px-[22px] items-center justify-start text-left text-[18px] text-dimgray font-helvetica-neue border-[1px] border-solid border-lightgray flex items-center mx-2 min-w-[fit-content] mb-2 sm:mb-0"
                                >
                                    <img
                                        src={"GoogleIcon"}
                                        alt="Google"
                                        width={27}
                                        height={27}
                                        className="relative z-10"
                                    />
                                    <span className="ml-2 whitespace-nowrap">
                                        <Google />
                                    </span>
                                </button>
                                <button
                                    // onClick={() => signIn()}
                                    className="relative rounded-xl box-border w-full flex flex-row py-3.5 px-[22px] items-center justify-start text-left text-[18px] text-dimgray font-helvetica-neue border-[1px] border-solid border-lightgray flex items-center mx-2 min-w-[fit-content]"
                                >
                                    <img
                                        src={"AppleIcon"}
                                        alt="Apple"
                                        width={27}
                                        height={27}
                                        className="relative z-10"
                                    />
                                    <span className="ml-2 whitespace-nowrap">
                                        Login with Apple
                                    </span>
                                </button>
                            </div>

                            <div>
                                <div className="flex items-center space-x-4 mt-10">
                                    <div className="relative box-border w-full h-px border-t-[1px] border-solid border-lightgray" />
                                    <div className="relative text-[18px] font-helvetica-neue text-lightgray text-left">
                                        Or
                                    </div>
                                    <div className="relative box-border w-full h-px border-t-[1px] border-solid border-grey" />
                                </div>
                                <div className="mt-10">
                                    <label
                                        className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-4 mt-5">
                                    <label
                                        className="text-[18px] font-helvetica-neue text-black-body text-left"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="text-right mb-4">
                                    <a href="#" className="text-blue-500 text-sm">
                                        Forgot Password?
                                    </a>
                                </div>
                                <Link to="/home">
                                    <button
                                        className="bg-blue-500 text-white font-bold py-2 w-full px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                        type="button"
                                        style={{ backgroundColor: "#4a4be4" }}
                                    >
                                        Sign In
                                    </button></Link>
                                <p className="mt-10 text-gray-600">
                                    Don`t have an account?{" "}
                                    <a href="#" className="text-blue-500">
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
