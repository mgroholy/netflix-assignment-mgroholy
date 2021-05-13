package com.codecool.videoservice.service;

import com.codecool.videoservice.model.RecommendationDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
@Slf4j
public class RecommendationServiceCaller {

    private RestTemplate restTemplate;

    @Value("${recommendation.url}")
    private String baseUrl;

    @Autowired
    public RecommendationServiceCaller(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<RecommendationDTO> getRecommendationsForVideo(long videoId){
        return Arrays.asList(restTemplate.getForEntity(baseUrl + "/" + videoId, RecommendationDTO[].class).getBody());
    }

    public List<RecommendationDTO> updateRecommendations(long videoId, List<RecommendationDTO> recommendations){
        return Arrays.asList(restTemplate.postForEntity(baseUrl + "/" + videoId, recommendations, RecommendationDTO[].class).getBody());
    }
}
