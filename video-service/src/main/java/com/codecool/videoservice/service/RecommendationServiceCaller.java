package com.codecool.videoservice.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class RecommendationServiceCaller {

    private RestTemplate restTemplate;

    @Value("${recommendation.url}")
    private String baseUrl;



}
