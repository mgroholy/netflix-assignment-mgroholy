import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { VideoListContainer } from "../VideoList/VideoListElements";
import { VideoDetailCard } from "./VideoDetailElements";
import { VIDEOS_API_URL } from "../VideoList/VideoList";
import ReactPlayer from "react-player";

const VideoDetails = () => {
  const { id } = useParams();

  const [video, setVideo] = useState({});

  console.log(id);

  const fetchVideo = async () => {
    let url = `${VIDEOS_API_URL}/${id}`;
    const response = await axios.get(url);
    setVideo(response.data);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <VideoListContainer>
      <VideoDetailCard>
        <ReactPlayer url={video.url} />
        <p style={{ color: "white" }}>{video.name}</p>
      </VideoDetailCard>
    </VideoListContainer>
  );
};

export default VideoDetails;
