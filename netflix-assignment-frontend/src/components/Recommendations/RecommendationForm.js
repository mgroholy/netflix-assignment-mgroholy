import axios from "axios";
import React, { useState } from "react";
import { VIDEOS_API_URL } from "../VideoList/VideoList";
import {
  RecommendationButton,
  RecommendationFormContainer,
} from "./RecommendationElements";

const RecommendationForm = ({ videoId, setHasNewRecommendation }) => {
  const [openForm, setOpenForm] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);

  const toggleForm = () => setOpenForm(!openForm);

  const sendRecommendation = async () => {
    let url = `${VIDEOS_API_URL}/${videoId}/recommendation`;
    let recommendation = { comment: comment, rating: rating };
    try {
      axios.post(url, recommendation);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RecommendationFormContainer>
      <RecommendationButton onClick={() => toggleForm()}>
        {openForm ? "Close" : "Add recommendation"}
      </RecommendationButton>
      {openForm && (
        <>
          <input
            type="text"
            onChange={(event) => setComment(event.target.value)}
            value={comment}
          ></input>
          <select
            onChange={(event) => setRating(event.target.value)}
            value={rating}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <RecommendationButton
            onClick={() => {
              setComment("");
              setRating(1);
              toggleForm();
              sendRecommendation();
              setHasNewRecommendation(true);
            }}
          >
            Save
          </RecommendationButton>
        </>
      )}
    </RecommendationFormContainer>
  );
};

export default RecommendationForm;
