package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.NavigationBar;
import com.example.service.NavBarService;

@RestController
@RequestMapping("/")
public class Controller {
	
	@Autowired
	private NavBarService navBarService;
	
	/**
	 * 
	 * @return List<NavigationBar> 
	 */
	@GetMapping("navitems")
	public List<NavigationBar> getNavBarItems() {
		return navBarService.getNavItems();
	}
	
}
