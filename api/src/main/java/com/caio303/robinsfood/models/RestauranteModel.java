package com.caio303.robinsfood.models;

import com.caio303.robinsfood.dtos.CadastroRestauranteDTO;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "restaurante")
public class RestauranteModel {

	private Integer id;
	private String nome;
	private byte[] imagem;
	private String horarioAbertura;
	private String horarioFechamento;
	private String distancia;

	public RestauranteModel() { super(); }
	
	public RestauranteModel(CadastroRestauranteDTO cadastroDTO) {
		this.nome = cadastroDTO.getNome();
		this.imagem = cadastroDTO.getImagem().getBytes();
		this.horarioAbertura = cadastroDTO.getHorarioAbertura();
		this.horarioFechamento = cadastroDTO.getHorarioFechamento();
		this.distancia = cadastroDTO.getDistancia();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	@Column(name = "nome", columnDefinition = "varchar(80)")
	public String getNome() {
		return nome;
	}

	@Lob
	@Basic(fetch = FetchType.LAZY)
	@Column(name = "imagem", columnDefinition = "bytea")
	public byte[] getImagem() {
		return imagem;
	}

	@Column(name = "horario_abertura", columnDefinition = "varchar(10)")
	public String getHorarioAbertura() {
		return horarioAbertura;
	}

	@Column(name = "horario_fechamento", columnDefinition = "varchar(10)")
	public String getHorarioFechamento() {
		return horarioFechamento;
	}

	@Column(name = "distancia", columnDefinition = "varchar(10)")
	public String getDistancia() {
		return distancia;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setImagem(byte[] imagem) {
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