package com.caio303.robinsfood.dtos;

import java.util.Arrays;
import java.util.List;

import com.caio303.robinsfood.models.ItemRestauranteModel;

public class ItemCatalogoDTO {

	private Integer id;
	private Integer restauranteId;
	private String nome;
	private Float valor;
	private List<String> detalhes;
	
	public ItemCatalogoDTO(ItemRestauranteModel itemRestauranteModel) {
		this.id = itemRestauranteModel.getId();
		this.restauranteId = itemRestauranteModel.getRestaurante().getId();
		this.nome = itemRestauranteModel.getNome();
		this.valor = itemRestauranteModel.getValor();
		this.detalhes = Arrays.asList(itemRestauranteModel.getDetalhes().split("\\]\\*\\*,\\*\\*\\["));
	}
	
	public Integer getId() {
		return id;
	}
	public Integer getRestauranteId() {
		return restauranteId;
	}
	public String getNome() {
		return nome;
	}
	public Float getValor() {
		return valor;
	}
	public List<String> getDetalhes() {
		return detalhes;
	}
}