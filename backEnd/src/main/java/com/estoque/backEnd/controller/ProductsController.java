package com.estoque.backEnd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.estoque.backEnd.model.Product;
import com.estoque.backEnd.repository.ProductsRepository;





@RestController
@RequestMapping("/api/products")
public class ProductsController {
	
	
	private final ProductsRepository productsRepository;
	
    public ProductsController( ProductsRepository productsRepository) {
    	this.productsRepository = productsRepository;
    }

	@GetMapping
	public @ResponseBody List<Product> list(){
		return productsRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Product create(@RequestBody  Product product ) {
		//return ResponseEntity.status(HttpStatus.CREATED).body(productsRepository.save(product));
		return productsRepository.save(product);
	}

}
