import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import Card from "../components/Card";
import SidebarCollapse from "../components/SidebarCollapse";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.streamhubApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="overflow-hidden">
      <div>
        <Navbar handleSidebar={handleSidebar} />
      </div>
      <div className="flex">
        {showSidebar ? (
          <Sidebar showSidebar={showSidebar} />
        ) : (
          <SidebarCollapse />
        )}
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={639}
          >
            <div
              className={`grid gap-y-4 ${
                showSidebar
                  ? "gap-x-16 grid-cols-3 px-12"
                  : "gap-x-6 grid-cols-4 px-5"
              }`}
            >
              {videos.map((item) => {
                return (
                  <Card data={item} width={showSidebar} key={item.videoId} />
                );
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Home;
