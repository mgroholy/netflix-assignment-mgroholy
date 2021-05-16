import React from "react";
import {
  RecommendationContainer,
  RecommendationsCard,
  RecommendationsTitle,
} from "./RecommendationElements";
import { FaStar } from "react-icons/fa";
import RecommendationForm from "./RecommendationForm";

const RecommendationList = ({
  recommendations,
  videoId,
  setHasNewRecommendation,
}) => {
  const getStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
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
            <RecommendationsCard key={recommendation.id}>
              <p>{recommendation.comment}</p>
              <p>{getStars(recommendation.rating)}</p>
            </RecommendationsCard>
          ))}
        <RecommendationForm
          videoId={videoId}
          setHasNewRecommendation={setHasNewRecommendation}
        />
      </RecommendationContainer>
    </RecommendationContainer>
  );
};

export default RecommendationList;
