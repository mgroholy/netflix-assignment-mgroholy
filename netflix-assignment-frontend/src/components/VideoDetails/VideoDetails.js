import React from "react";
import { useParams } from "react-router";
import { VideoListContainer } from "../VideoList/VideoListElements";
import { VideoDetailCard } from "./VideoDetailElements";

const VideoDetails = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <VideoListContainer>
      <VideoDetailCard>
        <p>Video details.</p>
      </VideoDetailCard>
    </VideoListContainer>
  );
};

export default VideoDetails;
