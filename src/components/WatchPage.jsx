import React from "react";
import { useAppDispatch } from "../hooks/useApp";
import { LiaThumbsUp, LiaThumbsDown, LiaDownloadSolid } from "react-icons/lia";
import { PiShareFat, PiLineVertical } from "react-icons/pi";
import { TbDots } from "react-icons/tb";
import RecommendedCard from "./RecommendedCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import DescriptionBox from "./DescriptionBox";

function WatchPage(props) {
  const dispatch = useAppDispatch();
  const { data: currentPlaying, id, recommendedVideo } = props;

  return (
    <div>
      <div>
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            frameBorder="0"
            width="100%"
            height="540"
            allow="autoplay"
            allowFullScreen
            title="Streamhub Player"
          ></iframe>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 px-10 py-5 min-w-[60vw]">
          <div className="text-xl">
            <h3>{currentPlaying.videoTitle}</h3>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center w-80 gap-2">
              <div className="flex items-center gap-3">
                <img
                  src={currentPlaying.channelInfo.image}
                  className="h-11 w-11 rounded-full"
                  alt="Channel Image"
                />
                <div className="flex flex-col">
                  <div className="text-sm text-wrap">
                    {currentPlaying.channelInfo.name}
                  </div>
                  <div className="text-xs text-[#888888]">
                    {currentPlaying.channelInfo.subscribers + " subscribers"}
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-white hover:bg-[#d9d9d9] text-black px-3 py-2 rounded-3xl">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <button className="flex items-center gap-1 bg-zinc-700 hover:bg-[#3f3f3f] text-white pl-3 py-2 rounded-l-3xl">
                  <LiaThumbsUp className="text-2xl" />
                  <span className="text-base">
                    {currentPlaying.videosLikes}
                  </span>
                </button>
                <div className="bg-zinc-700 text-[#7e7e7e] py-2 text-2xl">
                  <PiLineVertical />
                </div>
                <button className="flex items-center bg-zinc-700 hover:bg-[#3f3f3f] text-white pr-2 py-2 rounded-r-3xl">
                  <LiaThumbsDown className="text-2xl" />
                </button>
              </div>
              <div>
                <button className="flex items-center gap-2 bg-zinc-700 hover:bg-[#3f3f3f] text-white px-3 py-2 rounded-3xl">
                  <PiShareFat className="text-2xl" />
                  <span>Share</span>
                </button>
              </div>
              <div>
                <button className="flex items-center hover:bg-[#3f3f3f] bg-zinc-700 text-white px-3 py-2 rounded-3xl">
                  <LiaDownloadSolid className="text-2xl" />
                  <span>Download</span>
                </button>
              </div>
              <div className="bg-zinc-700 hover:bg-[#3f3f3f] text-white p-[10px] rounded-full">
                <TbDots className="text-xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#272727] text-sm rounded-2xl px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <span>{currentPlaying.videosViews + " views"}</span>
              <span>{currentPlaying.videoAge}</span>
            </div>
            <div className="h-auto">
              <DescriptionBox
                description={currentPlaying.videoDescription}
                maxLength={100}
              />
            </div>
          </div>
        </div>
        <div className="w-[415px] mt-10 mr-16 no-scrollbar">
          {recommendedVideo.length ? (
            <InfiniteScroll
              dataLength={recommendedVideo.length}
              next={() => dispatch(getRecommendedVideos(true))}
              hasMore={recommendedVideo.length < 500}
              loader={<Spinner />}
              height={"auto"}
            >
              {recommendedVideo.map((item) => {
                return <RecommendedCard data={item} key={item.videoId} />;
              })}
            </InfiniteScroll>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}

export default WatchPage;
