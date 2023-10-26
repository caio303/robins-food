package com.caio303.robinsfood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caio303.robinsfood.models.PedidoModel;

public interface PedidoRepository extends JpaRepository<PedidoModel, Integer> {
	
}