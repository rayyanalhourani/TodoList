package com.LibraryMS.controllers;

import com.LibraryMS.models.Task;
import com.LibraryMS.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/gettasks")
    public List<Task> getTasks(){
        return taskService.getTasks();
    }

    @PostMapping("/addTask")
    public String addTask(@RequestBody Task task){
        return taskService.addTask(task);
    }

    @PostMapping("/deleteTask/{id}")
    public String deleteTask(@PathVariable("id") int id){
        return taskService.deleteTask(id);
    }

    @PostMapping("/EditTask")
    public String EditTask(@RequestBody Task task){
        return taskService.updateTask(task);
    }

    @PostMapping("/EditTask/{id}/{timeleft}")
    public String EditTimeLeft(@PathVariable("id") int id,@PathVariable("timeleft") Long timeleft){
        return taskService.updateLeftTime(id,timeleft);
    }
}
