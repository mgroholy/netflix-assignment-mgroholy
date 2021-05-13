package com.codecool.videoservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.net.URL;

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

}
