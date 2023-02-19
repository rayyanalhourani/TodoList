package com.LibraryMS.DAO;

import com.LibraryMS.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User, Integer> {
}
