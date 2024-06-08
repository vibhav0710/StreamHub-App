import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiSolidMicrophone } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/streamhub/Slice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { Link } from "react-router-dom";

const Navbar = ({ handleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.streamhubApp.searchTerm);

  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos);
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="flex justify-between h-[8vh] px-6 items-center bg-[#0f0f0f] opcaity-95 sticky">
      <div className="flex gap-5 items-center text-xl">
        <div>
          <RxHamburgerMenu onClick={handleSidebar} className="cursor-pointer" />
        </div>
        <Link to={"/"} className="flex gap-1 items-center justify-center">
          <IoLogoYoutube className="text-2xl text-red-600" />
          <span className="text-xl  tracking-tighter">StreamHub</span>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div>
            <div className="flex items-center border-2 border-[#2c2c2c] rounded-full">
              <input
                type="text"
                placeholder="Search"
                className="text-[#868173] text-md bg-[#121212] px-4 py-1 h-[38px] w-[530px] focus:outline-none rounded-s-full"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
              <button>
                <CiSearch className="h-[38px] w-16 flex items-center justify-center px-5 bg-[#222222] rounded-e-full" />
              </button>
            </div>
          </div>
        </form>
        <div className="text-xl bg-[#222222] rounded-full p-[10px]">
          <BiSolidMicrophone className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center gap-5 text-2xl">
        <RiVideoAddLine className="cursor-pointer" />
        <div className="relative cursor-pointer">
          <BsBell />
          <span className="absolute bottom-2 left-3 text-sm bg-red-700 rounded-full px-1 border-2 border-black">
            1+
          </span>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZosaG-tmtf1fuq2JdNwjS0cBDt9P017RhQ&s"
          alt="Profile Picture"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
