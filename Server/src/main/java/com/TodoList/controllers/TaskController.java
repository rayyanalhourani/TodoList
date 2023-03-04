package com.TodoList.controllers;

import com.TodoList.models.Task;
import com.TodoList.services.TaskService;
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

    @DeleteMapping("/deleteTask/{id}")
    public String deleteTask(@PathVariable("id") int id){
        return taskService.deleteTask(id);
    }

    @PutMapping("/EditTask")
    public String EditTask(@RequestBody Task task){
        return taskService.updateTask(task);
    }

}
