package com.LibraryMS.services;
import com.LibraryMS.DAO.UserDAO;
import com.LibraryMS.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDAO dao;

    public List<User> getUsers(){
        return dao.findAll().stream().toList();
    }

    public String addUser(User user){
        dao.save(user);
        return "new user has been added";
    }

    public String deleteUser(int id){
        User user = dao.getById(id);
        dao.delete(user);
        return "User has been deleted";
    }

    public String updateUser(User user){
        dao.save(user);
        return "user has been updated";
    }


}
