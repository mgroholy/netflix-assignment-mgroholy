package com.codecool.videoservice.controller;

import com.codecool.videoservice.model.RecommendationDTO;
import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class VideoController {

    private VideoService videoService;

    @Autowired
    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping(path="/videos")
    public List<Video> getVideos(){
        return videoService.findAll();
    }

    @GetMapping(path="/videos/{id}")
    public Video getVideo(@PathVariable(name = "id") long id){
        return videoService.getVideoWithRecommendations(id);
    }

    @PostMapping(path="/videos/{id}")
    public Video updateVideo(@PathVariable(name = "id") long id, @RequestBody Video video){
        video.setId(id);
        videoService.updateVideo(video);
        return video;

    }
    @PostMapping(path="/videos/{id}/recommendation")
    public void addRecommendation(@PathVariable(name="id") long id, @RequestBody RecommendationDTO recommendationDTO){
        recommendationDTO.setVideoId(id);
        videoService.addRecommendation(recommendationDTO);
    }

}
