package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.NavigationBar;

@Repository
public interface INavBarRepository extends JpaRepository<NavigationBar, Long> {

}
