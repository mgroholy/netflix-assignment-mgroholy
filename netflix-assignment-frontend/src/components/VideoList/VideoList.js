import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  VideoListCard,
  VideoListContainer,
  VideoListItem,
} from "./VideoListElements";

export const VIDEOS_API_URL = "http://localhost:8762/videos";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(VIDEOS_API_URL);
      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <VideoListContainer>
        <VideoListCard>
          {videos.map((video) => (
            <VideoListItem to={`/videos/${video.id}`}>
              <p>{video.id}</p>
              <p>{video.name}</p>
            </VideoListItem>
          ))}
        </VideoListCard>
      </VideoListContainer>
    </div>
  );
};

export default VideoList;
