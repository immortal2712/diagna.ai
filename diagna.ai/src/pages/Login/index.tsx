import Sidebar from "../../components/Sidebar";
import SignInInput from "../../components/SignInInput";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <Sidebar
        className1="bg-black p-3 md:flex justify-center items-center md:h-screen md:w-2/5"
        classNameH1="text-white font-[Montserrat] font-bold md:text-7xl md:leading-[5.5rem]"
        heading="Diagna"
        showFooterLinks={false}
        showLinks={false}
        showPatientDetailLink={false}
      />
      <SignInInput />
    </div>
  );
};

export default Login;
