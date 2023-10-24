package com.caio303.robinsfood.dtos;

import java.util.List;

public class CadastroItemCatalogoDTO {

	private String nome;
	private Float valor;
	private List<String> detalhes;

	public String getNome() {
		return nome;
	}
	public Float getValor() {
		return valor;
	}
	public List<String> getDetalhes() {
		return detalhes;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public void setValor(Float valor) {
		this.valor = valor;
	}
	public void setDetalhes(List<String> detalhes) {
		this.detalhes = detalhes;
	}
}