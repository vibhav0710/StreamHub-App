import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_REACT_APP_STREAMHUB_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtube/App/searchPageVideos",
  async (isNext, { getState }) => {
    const {
      streamhubApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?maxResults=20&q=drop%20x%20out&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken = ${nextPageTokenFromState}` : ""
      }`
    );
    const items = response.data.items;
    const parsedData = await parseData(items);

    return {
      parsedData: [...videos, ...parsedData],
      nextPageToken: nextPageTokenFromState,
    };
  }
);
