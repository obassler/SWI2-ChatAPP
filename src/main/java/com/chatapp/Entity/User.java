package com.chatapp.Entity;

import jakarta.persistence.*;
import Lombok.Data;
import Lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "chatters")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;
}
