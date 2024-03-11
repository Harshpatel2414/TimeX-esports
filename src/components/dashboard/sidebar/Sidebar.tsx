"use client"
import React, { useState } from "react";
import { ListItem } from "./NavItem";
import { FaBars, FaDiceD6, FaTrophy, FaUsers } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { FaPersonRifle, FaRightFromBracket } from "react-icons/fa6";
import { useAuth } from "@/context/AuthContext";

const style = {
  fontSize: "30px",
};

const data = [
  {
    title: "Dashboard",
    Icon: <FaDiceD6 style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
    path: "/admin/dashboard",
  },
  {
    title: "Matches",
    Icon: <FaPersonRifle style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
    path: "/admin/dashboard/matches",
  },
  {
    title: "Winners",
    Icon: <FaTrophy style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
    path: "/admin/dashboard/winners",
  },
  {
    title: "Income",
    Icon: <RiWallet3Line style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
    path: "/admin/dashboard/income",
  },
  {
    title: "Users",
    Icon: <FaUsers style={style} />,
    style: { style },
    isActive: true,
    hidden: true,
    path: "/admin/dashboard/users",
  },
];

export function Sidebar() {
  const [isHidden, setIsHidden] = useState(true);
  let [activeTab, setActiveTab] = useState(0);
  let {logOut} = useAuth();

  const hideDashboard = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true);
  };

  return (
    <div className={"h-screen py-4 px-3 text-gray-100 bg-indigo-950 flex flex-col  " + (isHidden ? "w-fit" : "w-[350px] max-sm:w-[250px] absolute md:relative z-10")}>
      <div className={"flex px-2 mb-5 items-center gap-5 h-[60px]"}>
        <FaBars className="w-8 h-8 cursor-pointer" onClick={hideDashboard} />
        {!isHidden && <span className="text-lg tracking-widest font-semibold">TIM3-X</span>}
      </div>
      <div className="h-full border-y-2 border-indigo-800 mb-5">
        {data.map((el, i) => (
          <ListItem
            key={i}
            title={el.title}
            Icon={el.Icon}
            hidden={isHidden}
            path={el.path}
            isActive={activeTab === i}
          />
        ))}
      </div>
      <div className="flex h-fit w-full items-center justify-center gap-4 p-2 bg-indigo-900 rounded-md">
        <FaRightFromBracket className="w-6 h-6"/>
        {!isHidden && <button onClick={logOut} className='w-full text-sm text-left underline font-semibold tracking-wide'>Logout</button>}
      </div>
    </div>
  );
}