package com.codecool.videorecommendationservice.controller;

import com.codecool.videorecommendationservice.model.Recommendation;
import com.codecool.videorecommendationservice.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecommendationController {

    private RecommendationService recommendationService;

    @Autowired
    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @GetMapping(path="/recommendation/{videoId}")
    public List<Recommendation> getRecommendations(@PathVariable(name = "videoId") long videoId){
        return recommendationService.getRecommendationsForVideo(videoId);
    }

}
