package com.caio303.robinsfood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caio303.robinsfood.models.ItemPedidoModel;

public interface ItemPedidoRepository extends JpaRepository<ItemPedidoModel, Integer> {
	
}