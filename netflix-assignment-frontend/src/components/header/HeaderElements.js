import styled from "styled-components";
import { BiCameraMovie } from "react-icons/bi";

export const HeaderBar = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: black;
`;

export const MainIcon = styled(BiCameraMovie)`
  color: white;
  padding: 10px;
`;
