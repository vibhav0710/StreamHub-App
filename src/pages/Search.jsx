import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import SearchCard from "../components/SearchCard";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { useNavigate } from "react-router-dom";
import { clearVideos } from "../features/streamhub/Slice";
import SidebarCollapse from "../components/SidebarCollapse";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.streamhubApp.videos);
  const searchTerm = useAppSelector((state) => state.streamhubApp.searchTerm);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") {
      navigate("/");
    } else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="overflow-hidden">
      <div>
        <Navbar handleSidebar={handleSidebar} />
      </div>
      <div className={`flex ${!showSidebar && "justify-between"}`}>
        {showSidebar ? (
          <Sidebar showSidebar={showSidebar} />
        ) : (
          <SidebarCollapse />
        )}
        <div className="w-full">
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={639}
            >
              <div className="flex flex-col px-12 w-full">
                {videos.map((item) => {
                  return (
                    <SearchCard
                      data={item}
                      width={showSidebar}
                      key={item.videoId}
                    />
                  );
                })}
              </div>
            </InfiniteScroll>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
