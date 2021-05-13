package com.codecool.videorecommendationservice.service;

import com.codecool.videorecommendationservice.model.Recommendation;
import com.codecool.videorecommendationservice.repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendationService {

    private RecommendationRepository recommendationRepository;

    @Autowired
    public RecommendationService(RecommendationRepository recommendationRepository) {
        this.recommendationRepository = recommendationRepository;
    }

    public List<Recommendation> getRecommendationsForVideo(long videoId){
        return recommendationRepository.findAllByVideoId(videoId);
    }
}
