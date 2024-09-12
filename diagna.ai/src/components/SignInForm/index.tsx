const SignInForm = () => {
  return (
    <form className="form bg-white rounded-[20px] h-[19rem] flex flex-col mt-[1.5rem]">
      <label
        className="font-[Lato] font-normal text-[1rem] text-black leading-[1.06rem] mt-[1.87rem] mx-[1.87rem]"
        htmlFor="email"
      >
        Email address
      </label>
      <input
        className="email bg-[#F5F5F5] rounded-lg mt-[0.62rem] mx-[1.87rem] px-4 h-10"
        id="email"
        placeholder="Enter Email"
      />
      <label
        className="font-[Lato] font-normal text-[1rem] text-black leading-[1.06rem] mx-[1.87rem] mt-5"
        htmlFor="email"
      >
        Password
      </label>
      <input
        className="email font-[Lato] font-normal text-base leading-[1.18rem] text-black bg-[#F5F5F5] rounded-lg px-4 mx-[1.87rem] mt-[0.62rem] h-10"
        id="email"
        placeholder="Enter Password"
      />
      <p className="font-[Lato] font-normal text-base leading-[1.18rem] text-[#346BD5] cursor-pointer mx-[1.87rem] mt-5 hover:underline">
        Forgot Password?
      </p>
      <button className="mx-[1.87rem] mt-5 bg-black rounded-lg w-80 h-10 text-white font-[Montserrat] font-bold leading-5 text-center hover:shadow-2xl hover:shadow-gray-800/25">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
