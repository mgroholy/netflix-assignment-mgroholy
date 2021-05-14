import React from "react";
import {
  VideoListCard,
  VideoListContainer,
  VideoListItem,
} from "./VideoListElements";

const VideoList = () => {
  return (
    <div>
      <VideoListContainer>
        <VideoListCard>
          <VideoListItem>
            <p>id</p>
            <p>Item</p>
          </VideoListItem>
          <VideoListItem>
            <p>Item</p>
          </VideoListItem>
          <VideoListItem>
            <p>Item</p>
          </VideoListItem>
        </VideoListCard>
      </VideoListContainer>
    </div>
  );
};

export default VideoList;
