package com.estoque.backEnd.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;






@Entity
@Table(name = "produtos")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonProperty("id")
	private Long id;
	
	@Column(length = 50, nullable = false)
	private String nome;
	
	@Column(length = 15, nullable = false)
	private String categoria;
	
	@Column(length = 6, nullable = false)
	private int qtd;

	
	
	
	
	
	public Product(Long id, String nome, String categoria, int qtd) {
		
		this.id = id;
		this.nome = nome;
		this.categoria = categoria;
		this.qtd = qtd;
	}
	
	
	public Product() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public int getQtd() {
		return qtd;
	}

	public void setQtd(int qtd) {
		this.qtd = qtd;
	}
	
	
	
	
	

}
