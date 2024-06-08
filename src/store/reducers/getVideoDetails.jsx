import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { convertRawtoString } from "../../utils/convertRawToString";
import { timeSince } from "../../utils/timeSince";

const API_KEY = import.meta.env.VITE_REACT_APP_STREAMHUB_DATA_API_KEY;

export const getVideoDetails = createAsyncThunk(
  "youtube/App/videoDetails",
  async (id, { rejectWithValue }) => {
    try {
      console.log(`Fetching video details for ID: ${id}`);
      const {
        data: { items },
      } = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`
      );

      if (!items.length) {
        return rejectWithValue("No video details found");
      }

      const parsedData = await parseData(items[0]);
      return parsedData;
    } catch (error) {
      console.error("Error fetching video details:", error);
      return rejectWithValue(error.message);
    }
  }
);

const parseData = async (item) => {
  try {
    const channelResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}`
    );

    const snippet = item.snippet;
    const id = item.id;
    const statistics = item.statistics;

    const channelImage =
      channelResponse.data.items[0].snippet.thumbnails.default.url;
    const subscriberCount =
      channelResponse.data.items[0].statistics.subscriberCount;

    return {
      videoId: id,
      videoTitle: snippet.title,
      videoDescription: snippet.description,
      videosViews: convertRawtoString(statistics.viewCount),
      videosLikes: convertRawtoString(statistics.likeCount),
      videoAge: timeSince(new Date(snippet.publishedAt)),
      channelInfo: {
        id: snippet.channelId,
        image: channelImage,
        name: snippet.channelTitle,
        subscribers: convertRawtoString(subscriberCount, true),
      },
    };
  } catch (error) {
    console.error("Error parsing video data:", error);
    throw error;
  }
};