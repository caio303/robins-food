package com.caio303.robinsfood.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.caio303.robinsfood.models.ItemRestauranteModel;

public interface ItemRestauranteRepository extends JpaRepository<ItemRestauranteModel, Integer> {

	@Query(nativeQuery = true, value = ""
			+ "SELECT item.id, item.nome, item.valor, item.detalhes, item.id_restaurante FROM item_restaurante as item"
			+ "		WHERE item.id_restaurante = (:idRestaurante) ORDER BY id DESC")
	public List<ItemRestauranteModel> findAllByIdRestaurante(Integer idRestaurante);
	
}