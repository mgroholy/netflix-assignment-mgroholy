import styled from "styled-components";

export const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RecommendationsTitle = styled.h2`
  color: white;
  size: 24px;
`;
export const RecommendationsCard = styled.div`
  width: 80%;
  background-color: #303030;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 3px;
  color: white;
`;

export const RecommendationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const RecommendationButton = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  border: 3px solid #303030;
  border-radius: 3px;
  cursor: pointer;
  margin: 10px;
  &:hover {
    background-color: #303030;
    transition: 0.2s all ease-in;
  }
`;

export const RecommendationInput = styled.input`
  width: 300px;
  height: 30px;
  margin: 10px;
`;

export const RecommendationDropdown = styled.select`
  height: 30px;
  width: 50px;
  margin: 10px;
`;
