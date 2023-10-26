package com.caio303.robinsfood.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "item_pedido")
public class ItemPedidoModel {

	private Integer id;
	private ItemRestauranteModel item;
	private PedidoModel pedido;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() { return id; }

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = ItemRestauranteModel.class)
    @JoinColumn(name = "id_item", referencedColumnName = "id")
	public ItemRestauranteModel getItem() {	return item; }

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = PedidoModel.class)
    @JoinColumn(name = "id_pedido", referencedColumnName = "id")
	public PedidoModel getPedido() { return pedido; }
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public void setItem(ItemRestauranteModel item) {
		this.item = item;
	}
	public void setPedido(PedidoModel pedido) {
		this.pedido = pedido;
	}
}