package com.codecool.videorecommendationservice.repository;

import com.codecool.videorecommendationservice.model.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {

    List<Recommendation> findAllByVideoId(long videoId);

}
