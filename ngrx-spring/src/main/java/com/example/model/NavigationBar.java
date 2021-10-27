package com.example.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "nav_bar_tbl")
public class NavigationBar implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5970558883868096734L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "nav_bar_item_route")
	private String navBarItemRoute;

	@Column(name = "nav_bar_item")
	private String navBarItem;

}
