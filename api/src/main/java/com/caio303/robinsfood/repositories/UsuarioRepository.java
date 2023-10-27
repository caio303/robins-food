package com.caio303.robinsfood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caio303.robinsfood.models.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Integer> {
	
}