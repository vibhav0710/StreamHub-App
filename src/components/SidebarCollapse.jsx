import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

const SidebarCollapse = () => {
  return (
    <div className="flex flex-col gap-1 h-[92vh] bg-[#0f0f0f]">
      <ul className="flex flex-col">
        <li className="px-2 py-4 hover:bg-[#414141] rounded-xl">
          <a href="#" className="flex flex-col items-center gap-1">
            <GoHomeFill className="text-xl" />
            <span className="tracking-tighter text-[0.65rem]">Home</span>
          </a>
        </li>
        <li className="px-2 py-4 hover:bg-[#414141] rounded-xl">
          <a href="#" className="flex flex-col items-center gap-1">
            <SiYoutubeshorts className="text-xl" />
            <span className="tracking-tighter text-[0.65rem]">Shorts</span>
          </a>
        </li>
        <li className="px-2 py-4 hover:bg-[#414141] rounded-xl">
          <a href="#" className="flex flex-col items-center gap-1">
            <MdOutlineSubscriptions className="text-xl" />
            <span className="tracking-tighter text-[0.65rem]">
              Subscription
            </span>
          </a>
        </li>
        <li className="px-2 py-4 hover:bg-[#414141] rounded-xl">
          <a href="#" className="flex flex-col items-center gap-1">
            <MdOutlineVideoLibrary className="text-xl" />
            <span className="tracking-tighter text-[0.65rem]">You</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarCollapse;
