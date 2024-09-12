import SignInButtons from "../SignInButtons";
import SignInForm from "../SignInForm";

const SigInInput = () => {
  return (
    <div className="signin flex justify-center w-full h-screen bg-[#F5F5F5] md:items-center">
      <div className="w-[22.81rem]">
        <div className="header mt-3">
          <h1 className="text-black text-center text-2xl font-bold font-[Montserrat] leading-8 mb-[0.10rem] md:text-left">
            Sign In
          </h1>
          <p className="text-black text- text-center font-[Lato] font-normal leading-4 md:text-left">
            Sign in to your account
          </p>
        </div>
        <SignInButtons />
        <SignInForm />
        <div className="new-account text-center mx-[1.87rem] mt-5">
          <h5 className="font-[Lato] font-normal text-base leading-[1.18rem] text-[#858585]">
            Don't have an account?{" "}
            <span className="font-[Lato] font-normal text-base leading-[1.18rem] text-[#346BD4] hover:underline">
              Register here
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SigInInput;
