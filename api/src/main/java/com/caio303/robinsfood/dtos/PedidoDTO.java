package com.caio303.robinsfood.dtos;

import java.util.Date;
import java.util.List;

import com.caio303.robinsfood.models.PedidoModel;

public class PedidoDTO {

	private Integer id;
	private String enderecoEntrega;
	private Date data;
	private Float valorTotal;
	private String nomeRestaurante;
	private Integer restauranteId;
	private Integer clienteId;
	private List<ItemCatalogoDTO> itens;

	public PedidoDTO() { super(); }
	
	public PedidoDTO(PedidoModel model) {
		this.id = model.getId();
		this.enderecoEntrega = model.getEnderecoEntrega();
		this.data = model.getData();
		this.valorTotal = model.getValorTotal();
		this.nomeRestaurante = model.getRestaurante().getNome();
		this.restauranteId = model.getRestaurante().getId();
		this.clienteId = model.getCliente().getId();
	}
	
	public Integer getId() {
		return id;
	}
	public String getEnderecoEntrega() {
		return enderecoEntrega;
	}
	public Date getData() {
		return data;
	}
	public List<ItemCatalogoDTO> getItens() {
		return itens;
	}
	public Float getValorTotal() {
		return valorTotal;
	}
	public Integer getRestauranteId() {
		return restauranteId;
	}
	public Integer getClienteId() {
		return clienteId;
	}
	public String getNomeRestaurante() {
		return nomeRestaurante;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	public void setItens(List<ItemCatalogoDTO> itens) {
		this.itens = itens;
	}
	public void setData(Date data) {
		this.data = data;
	}
	
}