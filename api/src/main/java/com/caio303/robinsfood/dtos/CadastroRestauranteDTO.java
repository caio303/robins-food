package com.caio303.robinsfood.dtos;

public class CadastroRestauranteDTO {

	private String nome;
	private String imagem;
	private String horarioAbertura;
	private String horarioFechamento;
	private String distancia;
	
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
}