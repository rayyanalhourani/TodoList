package com.LibraryMS.services;

import com.LibraryMS.DAO.TaskDAO;
import com.LibraryMS.models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskDAO dao;

    public List<Task> getTasks(){
        return dao.findAll().stream().toList();
    }

    public String addTask(Task task){
        dao.save(task);
        return "new task has been added";
    }

    public String deleteTask(int id){
        Task task = dao.getById(id);
        dao.delete(task);
        return "User has been deleted";
    }

    public String updateTask(Task task){
        dao.save(task);
        return "task has been updated";
    }

    public String updateLeftTime(int id,Long time){
        Task task = dao.getById(id);
        task.setTimeLeft(time);
        return "the time has been updated";
    }


}
