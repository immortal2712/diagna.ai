import { BiMenu, BiBell } from "react-icons/bi";

import { IoMdCloseCircleOutline } from "react-icons/io";

import DefaultProfilePicture from "../../assets/profilepic.jpg";
import Sidebar from "../Sidebar";
import useAuthenticate from "../../hooks/useAuthenticate";
import { useState } from "react";

const HomeNavbar = ({ pageName }: { pageName: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { profilePic } = useAuthenticate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center w-screen h-auto mt-8 md:mt-[3.75rem]  md:items-baseline md:justify-around lg:justify-between md:w-[89.9%] md:mb-10">
      <div className="nav-left flex items-center">
        {!isOpen ? (
          <div
            className="text-4xl md:text-base ml-3  md:hidden"
            onClick={handleClick}
          >
            <BiMenu />
          </div>
        ) : (
          <div className="z-20 md:hidden transition ease-in-out delay-1000">
            <span
              className="text-3xl text-white z-30 absolute left-56 mt-2"
              onClick={handleClick}
            >
              <IoMdCloseCircleOutline />
            </span>
            <Sidebar
              className1="bg-black min-w-[17.5rem] h-auto absolute top-10 -left-1 border rounded-r-[2.5rem] pb-3 transition ease-in-out delay-1000"
              classNameH1="text-white font-[Montserrat] font-bold text-3xl leading-[2.75rem] pl-[3.12rem] pt-[3.75rem]"
              heading="Board."
              showFooterLinks={true}
              showLinks={true}
            />
          </div>
        )}
        <h1 className="menu-heading hidden text-black text-base font-[Montserrat] font-bold leading-[1.81rem] sm:ml-3 md:ml-1 lg:ml-[3.75rem] sm:block">
          {pageName}
        </h1>
      </div>
      <div className="nav-right flex items-center ml-7 md:ml-14">
        <div className="icon flex flex-row  sm:ml-1 md:ml-2 lg:ml-[1.87rem] px-4 md:px-3 2xl:px-0 items-center">
          <span className="text-4xl md:text-lg">
            <BiBell size={24} />
          </span>
          <img
            className="w-11 h-11 ml-2 rounded-full object-cover md:w-8 md:h-8 md:ml-2 lg:ml-5"
            src={profilePic || DefaultProfilePicture}
            alt="Profile Pic"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
