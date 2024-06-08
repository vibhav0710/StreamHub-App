import React from "react";
import axios from "axios";
import { parseVideoDuration } from "./parseVideoDuration";
import { convertRawtoString } from "./convertRawToString";
import { timeSince } from "./timeSince";

const API_KEY = import.meta.env.VITE_REACT_APP_STREAMHUB_DATA_API_KEY;

export const parseRecommendedData = async (items) => {
  try {
    const videoIds = [];
    const channelIds = [];

    items.forEach((item) => {
      const videoId = item?.contentDetails?.upload?.videoId;
      const channelId = item?.snippet?.channelId;
      if (videoId && channelId) {
        videoIds.push(videoId);
        channelIds.push(channelId);
      }
    });

    const channelsResponse = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds}&key=${API_KEY}`
    );
    const videosResponse = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${API_KEY}`
    );

    const channelsData = channelsResponse.data.items;
    const videosData = videosResponse.data.items;

    const parsedChannelsData = [];
    channelsData.forEach((channel) =>
      parsedChannelsData.push({
        id: channel.id,
        image: channel.snippet.thumbnails.default.url,
      })
    );

    const videoDataMap = videosData.reduce((acc, video) => {
      acc[video.id] = video;
      return acc;
    }, {});

    const parseData = [];
    items.forEach((item) => {
      const videoId = item?.contentDetails?.upload?.videoId;
      const channelId = item?.snippet?.channelId;

      if (videoId && channelId) {
        const videoData = videoDataMap[videoId];
        const channelImage = parsedChannelsData.find(
          (data) => data.id === channelId
        )?.image;

        if (videoData && channelImage) {
          const videoDuration = videoData.contentDetails.duration;
          const videosViews = videoData.statistics.viewCount;

          parseData.push({
            videoId: videoId,
            videoTitle: item.snippet.title,
            videoDescription: item.snippet.description,
            videoThumbnail: item.snippet.thumbnails.medium.url,
            videoLink: `https://www.youtube.com/watch?v=${videoId}`,
            videoDuration: parseVideoDuration(videoDuration),
            videosViews: convertRawtoString(videosViews),
            videoAge: timeSince(new Date(item.snippet.publishedAt)),
            channelInfo: {
              id: item.snippet.channelId,
              image: channelImage,
              name: item.snippet.channelTitle,
            },
          });
        } else {
          console.log(
            `Missing data for videoId: ${videoId} or channelId: ${channelId}`
          );
        }
      }
    });

    return parseData;
  } catch (err) {
    console.log(err);
  }
};
