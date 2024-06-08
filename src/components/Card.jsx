import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { data, width } = props;

  return (
    <div
      className={`w-[${
        width ? "350px" : "340px"
      }] mt-10 mb-[-16px] flex gap-3 flex-col`}
    >
      <div className="relative">
        <span className="absolute bottom-4 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="h-52 w-[350px] rounded-xl"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt={data.channelInfo.name}
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-500">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
          </div>
          <div className="flex gap-2 text-sm text-gray-500">
            <span>{data.videosViews} views</span>
            <span>{data.videoAge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
