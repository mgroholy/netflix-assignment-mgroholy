import React from "react";
import {
  RecommendationContainer,
  RecommendationsCard,
  RecommendationsTitle,
} from "./RecommendationElements";
import { FaStar } from "react-icons/fa";

const RecommendationList = ({ recommendations }) => {
  const getStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      console.log("star");
      stars.push(<FaStar />);
    }
    return stars;
  };

  return (
    <RecommendationContainer>
      <RecommendationsTitle>Recommendations</RecommendationsTitle>
      <RecommendationContainer>
        {recommendations &&
          recommendations.map((recommendation) => (
            <RecommendationsCard>
              <p>{recommendation.comment}</p>
              <p>{getStars(recommendation.rating)}</p>
            </RecommendationsCard>
          ))}
      </RecommendationContainer>
    </RecommendationContainer>
  );
};

export default RecommendationList;
