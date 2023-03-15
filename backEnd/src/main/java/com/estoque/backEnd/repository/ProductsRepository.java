package com.estoque.backEnd.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.estoque.backEnd.model.Product;


@Repository
public interface ProductsRepository extends JpaRepository<Product, Long>{

}
