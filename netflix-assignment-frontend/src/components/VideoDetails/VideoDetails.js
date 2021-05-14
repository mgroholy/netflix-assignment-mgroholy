import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { VideoListContainer } from "../VideoList/VideoListElements";
import { VideoDetailCard, VideoTitle } from "./VideoDetailElements";
import { VIDEOS_API_URL } from "../VideoList/VideoList";
import YouTube from "react-youtube";
import RecommendationList from "../Recommendations/RecommendationList";

const VideoDetails = () => {
  const { id } = useParams();

  const [video, setVideo] = useState({});
  const [videoId, setVideoId] = useState("");

  console.log(id);

  const fetchVideo = async () => {
    let url = `${VIDEOS_API_URL}/${id}`;
    const response = await axios.get(url);
    setVideo(response.data);
    getVideoId(response.data.url);
  };

  const getVideoId = (url) => {
    const urlParts = url.split("?v=");
    const id = urlParts[urlParts.length - 1];
    setVideoId(id);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <VideoListContainer>
      <VideoDetailCard>
        <VideoTitle>{video.name}</VideoTitle>
        <YouTube videoId={videoId} />
        {console.log(video)}
        <RecommendationList recommendations={video.recommendations} />
      </VideoDetailCard>
    </VideoListContainer>
  );
};

export default VideoDetails;
