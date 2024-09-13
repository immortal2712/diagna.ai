import { RiPieChartLine } from "react-icons/ri";
import { BsTags } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export const links = [
  {
    title: "Dashboard",
    icon: <RiPieChartLine />,
    to: "/dashboard",
  },
  {
    title: "Transactions",
    icon: <BsTags />,
    to: "/transactions",
  },
  {
    title: "Schedules",
    icon: <AiOutlineSchedule />,
    to: "/schedules",
  },
  {
    title: "Users",
    icon: <FaRegUserCircle />,
    to: "/users",
  },
  {
    title: "Settings",
    icon: <FiSettings />,
    to: "/settings",
  },
];
export const patientDetailLinks = [
  {
    title: "Neurology",
    icon: <RiPieChartLine />,
    to: "/neurology",
  },
  {
    title: "Labs",
    icon: <RiPieChartLine />,
    to: "/labs",
  },
  {
    title: "Ventilation",
    icon: <RiPieChartLine />,
    to: "/ventilation",
  },
];

export const sideNavFooter = [
  {
    title: "Help",
  },
  {
    title: "Contact Us",
  },
];
