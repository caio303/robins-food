package com.caio303.robinsfood.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.caio303.robinsfood.models.ItemPedidoModel;

public interface ItemPedidoRepository extends JpaRepository<ItemPedidoModel, Integer> {

	@Query(value = "SELECT id, quantidade, id_item, id_pedido FROM item_pedido WHERE id_pedido = (:pedidoId)",
			nativeQuery = true)
	List<ItemPedidoModel> findAllByPedidoId(Integer pedidoId);
	
}