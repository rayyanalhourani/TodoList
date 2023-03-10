package com.TodoList.controllers;

import com.TodoList.models.Task;
import com.TodoList.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5173/")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/gettasks")
    public List<Task> getTasks(){
        return taskService.getTasks();
    }


    @PostMapping(value = "/addTask" , consumes = MediaType.APPLICATION_JSON_VALUE)
    public String addTask(@RequestBody Task task){
        System.out.println(task);
        return taskService.addTask(task);
    }

    @DeleteMapping("/deleteTask/{id}")
    public String deleteTask(@PathVariable("id") int id){
        return taskService.deleteTask(id);
    }

    @PutMapping("/EditTask")
    public String EditTask(@RequestBody Task task){
        return taskService.updateTask(task);
    }

}
