package com.chatapp.Dto;

import lombok.Data;

@Data
public class AuthRequest {
    private String username;
    private String password;
}
