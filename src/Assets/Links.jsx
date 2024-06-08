import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { AiOutlineLike, AiOutlineTrophy } from "react-icons/ai";
import { FaFireAlt } from "react-icons/fa";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { HiMiniSignal } from "react-icons/hi2";
import { GiHanger } from "react-icons/gi";
import { BiBulb } from "react-icons/bi";
import {
  RiVideoFill,
  RiPlayList2Fill,
  RiShoppingBag4Fill,
  RiSignalTowerLine,
  RiNewsLine,
} from "react-icons/ri";
import {
  MdOutlineSubscriptions,
  MdOutlineHistory,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineMusicNote,
} from "react-icons/md";

export const mainLinks = [
  {
    icon: <GoHomeFill className="text-xl" />,
    name: "Home",
    href: "/",
  },
  {
    icon: <SiYoutubeshorts className="text-xl" />,
    name: "Shorts",
  },
  {
    icon: <MdOutlineSubscriptions className="text-xl" />,
    name: "Subscription",
  },
];

export const otherLinks = [
  {
    icon: <MdOutlineVideoLibrary className="text-xl" />,
    name: "Your Channel",
  },
  {
    icon: <MdOutlineHistory className="text-xl" />,
    name: "History",
  },
  {
    icon: <RiPlayList2Fill className="text-xl" />,
    name: "Playlists",
  },
  {
    icon: <RiVideoFill className="text-xl" />,
    name: "Your videos",
  },
  {
    icon: <MdOutlineWatchLater className="text-xl" />,
    name: "Watch Later",
  },
  {
    icon: <AiOutlineLike className="text-xl" />,
    name: "Liked videos",
  },
];

export const exploreLinks = [
  {
    icon: <FaFireAlt />,
    name: "Trending",
  },
  {
    icon: <RiShoppingBag4Fill />,
    name: "Shopping",
  },
  {
    icon: <MdOutlineMusicNote />,
    name: "Music",
  },
  {
    icon: <PiFilmSlateDuotone />,
    name: "Films",
  },
  {
    icon: <HiMiniSignal />,
    name: "Live",
  },
  {
    icon: <SiYoutubegaming />,
    name: "Gaming",
  },
  {
    icon: <RiNewsLine />,
    name: "News",
  },
  {
    icon: <AiOutlineTrophy />,
    name: "Sport",
  },
  {
    icon: <BiBulb />,
    name: "Courses",
  },
  {
    icon: <GiHanger />,
    name: "Fashion & beauty",
  },
  {
    icon: <RiSignalTowerLine />,
    name: "Podcasts",
  },
];
