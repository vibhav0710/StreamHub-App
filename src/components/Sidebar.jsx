import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { mainLinks, otherLinks, exploreLinks } from "../Assets/Links";
import { Link } from "react-router-dom";

const Sidebar = ({ showSidebar }) => {
  return (
    <div
      className={`flex flex-col gap-2 h-[92vh] w-2/12 bg-[#0f0f0f] overflow-hidden hover:overflow-y-auto scroll-smooth ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col px-3">
        {mainLinks.map(({ icon, name, href }) => {
          return (
            <li key={name} className="px-3 py-2 hover:bg-[#414141] rounded-xl">
              <Link to={href} className="flex items-center gap-6">
                {icon}
                <span className="tracking-wider">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr className="w-56 ml-4 mt-3 mb-2 opacity-40" />
      <a
        href="#"
        className="flex items-center gap-2 px-6 hover:bg-[#414141] rounded-xl"
      >
        <span className="py-2 tracking-wider">You</span>
        <MdArrowForwardIos className="w-3" />
      </a>
      <ul className="flex flex-col px-3">
        {otherLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="px-3 py-2 hover:bg-[#414141] rounded-xl">
              <a href="#" className="flex items-center gap-6">
                {icon}
                <span className="tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className="w-56 mt-3 mb-2 opacity-40" />
      <div className="px-6 py-2 gap-2 tracking-wider">Subscriptions</div>
      <ul className="flex flex-col px-3"></ul>
      <hr className="w-56 mt-3 mb-2 opacity-40" />
      <div className="px-6 py-2 gap-2 tracking-wider">Explore</div>
      <ul className="flex flex-col px-3">
        {exploreLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="px-3 py-2 hover:bg-[#414141] rounded-xl">
              <a href="#" className="flex items-center gap-6">
                {icon}
                <span className="tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className="w-56 mt-3 mb-2 opacity-40" />
      <div className="px-6 py-2 gap-2 tracking-wider">More from StreamHub</div>
      <ul className="flex flex-col px-3">
        {otherLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="px-3 py-2 hover:bg-[#414141] rounded-xl">
              <a href="#" className="flex items-center gap-6">
                {icon}
                <span className="tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className="w-56 mt-3 mb-2 opacity-40" />
      <ul className="flex flex-col px-3">
        {otherLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="px-3 py-2 hover:bg-[#414141] rounded-xl">
              <a href="#" className="flex items-center gap-6">
                {icon}
                <span className="tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className="w-56 mt-3 mb-2 opacity-40" />
    </div>
  );
};

export default Sidebar;
