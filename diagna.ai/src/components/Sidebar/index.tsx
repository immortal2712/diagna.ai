import { ReactNode } from "react";
import { links, sideNavFooter } from "../../data/index";
import { NavLink } from "react-router-dom";

interface LinkItem {
  title: string;
  icon: ReactNode;
  to: string;
}

const Sidebar = ({
  className1,
  classNameH1,
  heading,
  showLinks,
  showFooterLinks,
}: {
  className1: string;
  classNameH1: string;
  heading: string;
  showLinks: boolean;
  showFooterLinks: boolean;
}) => {
  const activeLink =
    "text-white flex items-center pl-[3.12rem] mt-10 text-[1.12rem] font-bold leading-[1.37rem]";
  const normalLink =
    "text-white flex items-center pl-[3.12rem] mt-10 text-[1.12rem] font-normal leading-[1.37rem] hover:text-gray-300";
  return (
    <div className={className1}>
      <h1 className={classNameH1}>{heading}</h1>
      {showLinks &&
        links?.map((item: LinkItem, index: number) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <span className="icon">{item.icon}</span>
            <p className="ml-5 font-[Montserrat]">{item.title}</p>
          </NavLink>
        ))}
      {showFooterLinks && (
        <div className="mt-[24.87rem]">
          {sideNavFooter.map((item, index) => (
            <p
              key={index}
              className="pl-[3.12rem] text-[#FFFFFF] text-sm font-[Montserrat] font-normal mb-5 cursor-pointer hover:underline"
            >
              {item.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
