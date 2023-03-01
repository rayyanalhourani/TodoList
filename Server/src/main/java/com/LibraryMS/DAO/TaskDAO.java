package com.LibraryMS.DAO;

import com.LibraryMS.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskDAO extends JpaRepository<Task , Integer> {
}
