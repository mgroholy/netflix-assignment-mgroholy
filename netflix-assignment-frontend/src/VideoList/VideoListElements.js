import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VideoListCard = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VideoListItem = styled(Link)`
  width: 50%;
  height: 50px;
  background-color: #303030;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`;
