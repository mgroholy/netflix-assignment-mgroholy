package com.codecool.videorecommendationservice;

import com.codecool.videorecommendationservice.model.Recommendation;
import com.codecool.videorecommendationservice.repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class VideoRecommendationServiceApplication {

	private RecommendationRepository recommendationRepository;

	@Autowired
	public VideoRecommendationServiceApplication(RecommendationRepository recommendationRepository) {
		this.recommendationRepository = recommendationRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(VideoRecommendationServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner init(){
		return args -> {
			Recommendation video1Recommendation = Recommendation.builder().comment("Great video!").rating(5).videoId(1).build();
			recommendationRepository.save(video1Recommendation);
		};
	}

}
