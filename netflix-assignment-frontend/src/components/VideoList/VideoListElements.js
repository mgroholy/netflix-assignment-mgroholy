import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoListContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
`;

export const VideoListCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  background-color: #000;
  margin: 50px;
  border-radius: 3px;
  padding: 20px;
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
