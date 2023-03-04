package com.TodoList.controllers;

import com.TodoList.models.User;
import com.TodoList.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getusers")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PostMapping("/adduser")
    public String addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @DeleteMapping("/deleteuser/{id}")
    public String deleteUser(@PathVariable("id") int id){
        return userService.deleteUser(id);
    }

    @PutMapping("/updateuser")
    public String updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }


}
