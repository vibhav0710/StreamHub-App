import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { data, width } = props;

  return (
    <div
      className={`w-[${
        width ? "1300px" : "1500px"
      }] mt-10 mb-[-16px] flex gap-3`}
    >
      <div className="relative">
        <span className="absolute bottom-4 right-4 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="h-60 w-[600px] rounded-xl"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div>
          <h3>
            <a href="#" className="text-xl">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-lg text-gray-500">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
          </div>
          <div className="flex gap-3 text-sm text-gray-500">
            <span>{data.videosViews} views</span>
            <span>{data.videoAge}</span>
          </div>
        </div>
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt={data.channelInfo.name}
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
