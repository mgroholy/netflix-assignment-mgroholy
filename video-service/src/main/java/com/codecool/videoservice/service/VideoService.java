package com.codecool.videoservice.service;

import com.codecool.videoservice.model.RecommendationDTO;
import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class VideoService {

    private VideoRepository videoRepository;
    private RecommendationServiceCaller recommendationServiceCaller;

    @Autowired
    public VideoService(VideoRepository videoRepository, RecommendationServiceCaller recommendationServiceCaller) {
        this.videoRepository = videoRepository;
        this.recommendationServiceCaller = recommendationServiceCaller;
    }

    public List<Video> findAll(){
        return videoRepository.findAll();
    }

    public Video getVideoWithRecommendations(long videoId) {
        Optional<Video> videoOptional = videoRepository.findById(videoId);
        if(videoOptional.isPresent()){
            List<RecommendationDTO> recommendations = recommendationServiceCaller.getRecommendationsForVideo(videoId);
            Video video = videoOptional.get();
            video.setRecommendations(recommendations);
            return video;
        } else {
            throw new NoSuchElementException("No video found with id " +videoId);
        }
    }

    public void updateVideo(Video video) {
        Video videoToUpdate = videoRepository.getOne(video.getId());
        videoToUpdate.setName(video.getName());
        videoToUpdate.setUrl(video.getUrl());
        videoToUpdate.setRecommendations(video.getRecommendations());
        recommendationServiceCaller.updateRecommendations(video.getId(), video.getRecommendations());

    }
}
