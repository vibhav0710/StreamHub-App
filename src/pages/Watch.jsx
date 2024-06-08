import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WatchPage from "../components/WatchPage";
import Spinner from "../components/Spinner";
import SidebarCollapse from "../components/SidebarCollapse";

function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector(
    (state) => state.streamhubApp.currentPlaying
  );
  const status = useAppSelector((state) => state.streamhubApp.status);
  const error = useAppSelector((state) => state.streamhubApp.error);
  const recommendedVideo = useAppSelector(
    (state) => state.streamhubApp.recommendedVideo
  );

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id, dispatch, navigate]);

  useEffect(() => {
    if (currentPlaying && id) {
      dispatch(getRecommendedVideos(id));
    }
  }, [currentPlaying, dispatch, id]);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {status === "loading" && (
        <div className="mt-[50%]">
          <Spinner />
        </div>
      )}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" &&
        currentPlaying &&
        currentPlaying?.videoId === id && (
          <div className="overflow-hidden">
            <div>
              <Navbar handleSidebar={handleSidebar} />
            </div>
            <div className="flex gap-10 justify-between relative">
              {showSidebar && (
                <div className="absolute w-full z-10">
                  <Sidebar showSidebar={showSidebar} />
                </div>
              )}
              <div className={`w-full ${showSidebar ? "opacity-40" : ""}`}>
                <WatchPage
                  data={currentPlaying}
                  id={id}
                  recommendedVideo={recommendedVideo}
                />
              </div>
            </div>
          </div>
        )}
    </>
  );
}

export default Watch;
