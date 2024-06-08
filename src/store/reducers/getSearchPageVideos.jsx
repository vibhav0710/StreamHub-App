import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_REACT_APP_STREAMHUB_DATA_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
  "youtube/App/homePageVideos",
  async (isNext, { getState }) => {
    const {
      streamhubApp: {
        nextPageToken: nextPageTokenFromState,
        videos,
        searchTerm,
      },
    } = getState();
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${
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
