import HomeNavbar from "../../components/HomeNavbar";
import PatientCard from "../../components/PatientCard";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="bg-[#F5F5F5] flex">
      <Sidebar
        className1=" hidden bg-black md:block md:rounded-[1.87rem] md:my-10 md:ml-10 md:min-w-[17.5rem] md:max-w-[17.5rem] md:h-[59rem]"
        classNameH1="text-white font-[Montserrat] font-bold text-3xl leading-[2.75rem] pl-[3.12rem] pt-[3.75rem]"
        heading="Board."
        showFooterLinks={true}
        showLinks={true}
      />
      <div className="md:w-full">
        <HomeNavbar pageName="Dashboard" />
        <PatientCard />
      </div>
    </div>
  );
};

export default Dashboard;
