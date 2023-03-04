package com.TodoList.DAO;

import com.TodoList.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskDAO extends JpaRepository<Task , Integer> {
}
