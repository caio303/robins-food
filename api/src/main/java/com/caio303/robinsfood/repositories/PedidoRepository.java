package com.caio303.robinsfood.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.caio303.robinsfood.models.PedidoModel;

public interface PedidoRepository extends JpaRepository<PedidoModel, Integer> {

	@Query(value = ""
			+ "SELECT id, \"data\", endereco_entrega, valor_total, id_cliente, id_restaurante FROM pedido"
			+ " WHERE id_cliente = (:clienteId)"
			+ " ORDER BY id DESC;",
			nativeQuery = true)
	List<PedidoModel> findAllByClienteId(Integer clienteId);
	
}