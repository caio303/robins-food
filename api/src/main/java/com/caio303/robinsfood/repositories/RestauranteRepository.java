package com.caio303.robinsfood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caio303.robinsfood.models.RestauranteModel;

public interface RestauranteRepository extends JpaRepository<RestauranteModel, Integer>{

}