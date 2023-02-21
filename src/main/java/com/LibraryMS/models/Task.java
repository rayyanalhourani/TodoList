package com.LibraryMS.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Table(name="tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long task_id;

    @Column(name="name")
    private String name;

    @Column(name="duration")
    private Long duration;

    @Column(name="timeLeft")
    private Long timeLeft;

    @Column(name="owner_id")
    private Long owner_id;



}
