import React from "react";
import { Link } from "react-router-dom";

function RecommendedCard({ data }) {
  return (
    <div className="w-[405px] flex gap-3">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-xs bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="h-[94px] w-[168px] rounded-xl"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-4 w-[235px]">
        <div>
          <h3>
            <a href="#" className="text-sm">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-xs text-gray-500">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
          </div>
          <div className="flex gap-3 text-xs text-gray-500">
            <span>{data.videosViews} views</span>
            <span>{data.videoAge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedCard;
