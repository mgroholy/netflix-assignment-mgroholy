package com.codecool.videorecommendationservice.repository;

import com.codecool.videorecommendationservice.model.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
}
