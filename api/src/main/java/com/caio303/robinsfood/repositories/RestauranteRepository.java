package com.caio303.robinsfood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.caio303.robinsfood.models.RestauranteModel;

public interface RestauranteRepository extends JpaRepository<RestauranteModel, Integer> {
	
	@Modifying
	@Transactional
	@Query(value = "insert into restaurante (distancia, horario_abertura, horario_fechamento, imagem, nome) values ("
			+ "(:distancia),"
			+ "(:horarioAbertura),"
			+ "(:horarioFechamento),"
			+ "(:imagem),"
			+ "(:nome));", nativeQuery = true)
	void save(String distancia, String horarioAbertura, String horarioFechamento, String imagem, String nome);
}