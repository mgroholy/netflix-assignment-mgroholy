package com.codecool.videoservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.net.URL;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Video {

    @Id
    @GeneratedValue
    private long id;

    private String name;

    private URL url;

    @Transient
    private List<RecommendationDTO> recommendations;

}
