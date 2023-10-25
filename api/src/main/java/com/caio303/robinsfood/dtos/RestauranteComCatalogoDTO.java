package com.caio303.robinsfood.dtos;

import java.util.ArrayList;
import java.util.List;

import com.caio303.robinsfood.models.RestauranteModel;

public class RestauranteComCatalogoDTO {

	private Integer id;
	private String nome;
	private String imagem;
	private String horarioAbertura;
	private String horarioFechamento;
	private String distancia;
	private List<ItemCatalogoDTO> catalogo;
	
	public RestauranteComCatalogoDTO(RestauranteModel restauranteModel) {
		this.id = restauranteModel.getId();
		this.nome = restauranteModel.getNome();
		this.imagem = restauranteModel.getImagem();
		this.horarioAbertura = restauranteModel.getHorarioAbertura();
		this.horarioFechamento = restauranteModel.getHorarioFechamento();
		this.distancia = restauranteModel.getDistancia();
		this.catalogo = new ArrayList<>();
	}

	public RestauranteComCatalogoDTO() { super(); }
	
	public Integer getId() {
		return id;
	}
	public String getNome() {
		return nome;
	}
	public String getImagem() {
		return imagem;
	}
	public String getHorarioAbertura() {
		return horarioAbertura;
	}
	public String getHorarioFechamento() {
		return horarioFechamento;
	}
	public String getDistancia() {
		return distancia;
	}
	public List<ItemCatalogoDTO> getCatalogo() {
		return catalogo;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	public void setHorarioAbertura(String horarioAbertura) {
		this.horarioAbertura = horarioAbertura;
	}
	public void setHorarioFechamento(String horarioFechamento) {
		this.horarioFechamento = horarioFechamento;
	}
	public void setDistancia(String distancia) {
		this.distancia = distancia;
	}
	public void setCatalogo(List<ItemCatalogoDTO> catalogo) {
		this.catalogo = catalogo;
	}
}