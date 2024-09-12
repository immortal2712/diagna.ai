import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import useAuthenticate from "../../hooks/useAuthenticate";

const SignInButtons = () => {
  const { handleClick } = useAuthenticate();

  return (
    <div className="flex justify-between mt-5">
      <button
        className="flex items-center justify-evenly bg-white rounded-lg w-44 h-7 font-[Montserrat] font-normal leading-[0.80rem] text-xs hover:shadow-2xl"
        onClick={() => handleClick()}
      >
        <img className="w-3 h-3" src={google} alt="google-logo" />
        <span className="mr-3">Sign in with Google</span>
      </button>
      <button className="flex items-center justify-evenly bg-white rounded-lg w-44 h-7 font-[Montserrat] font-normal leading-[0.80rem] text-xs hover:shadow-2xl hover:shadow-gray-600/50">
        <img className="w-3 h-3" src={apple} alt="apple-logo" />
        <span className="mr-3">Sign in with Apple</span>
      </button>
    </div>
  );
};

export default SignInButtons;
