package com.codecool.videoservice;

import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.web.client.RestTemplate;

import java.net.URL;
import java.util.List;

@SpringBootApplication
public class VideoServiceApplication {

	private VideoRepository videoRepository;

	@Autowired
	public VideoServiceApplication(VideoRepository videoRepository) {
		this.videoRepository = videoRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(VideoServiceApplication.class, args);
	}

	@Bean
	@Profile("production")
	public CommandLineRunner init(){
		return args -> {
			Video video1 = Video.builder().id(1).name("bitch lasagna").url(new URL("https://www.youtube.com/watch?v=6Dh-RL__uN4")).build();
			Video video2 = Video.builder().id(2).name("Mine All Day").url(new URL("https://www.youtube.com/watch?v=UAlIq7BKNxg")).build();
			Video video3 = Video.builder().id(3).name("Never Get Naked in Your Shower").url(new URL("https://www.youtube.com/watch?v=K3eb0Kick6w")).build();
			videoRepository.saveAll(List.of(video1, video2, video3));
		};
	}

	@Bean
	@LoadBalanced
	public RestTemplate restTemplate(){
		return new RestTemplate();
	}

}
