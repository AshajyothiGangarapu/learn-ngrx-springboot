package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.NavigationBar;
import com.example.repo.INavBarRepository;

@Service
public class NavBarService {

	@Autowired
	private INavBarRepository navRepo;

	public List<NavigationBar> getNavItems() {
		return navRepo.findAll();
	}

}
