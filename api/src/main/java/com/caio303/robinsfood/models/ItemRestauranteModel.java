package com.caio303.robinsfood.models;

import com.caio303.robinsfood.dtos.CadastroItemCatalogoDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "item_restaurante")
public class ItemRestauranteModel {

	private Integer id;
	private String nome;
	private Float valor;
	private String detalhes; // Detalhes separados por essa sequencia: ']**,**['
	private RestauranteModel restaurante;
	
	public ItemRestauranteModel() { super(); }
	
	public ItemRestauranteModel(RestauranteModel restaurante, CadastroItemCatalogoDTO cadastroItemCatalogoDTO) {
		this.restaurante = restaurante;
		this.nome = cadastroItemCatalogoDTO.getNome();
		this.valor = cadastroItemCatalogoDTO.getValor();
		this.detalhes = String.join("]**,**[", cadastroItemCatalogoDTO.getDetalhes());
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	@JsonIgnore
	@ManyToOne(targetEntity = RestauranteModel.class)
    @JoinColumn(name = "id_restaurante", referencedColumnName = "id", nullable = false)
	public RestauranteModel getRestaurante() {
		return restaurante;
	}

	@Column(name = "nome", columnDefinition = "varchar(80)", nullable = false)
	public String getNome() {
		return nome;
	}
	
	@Column(name = "valor", nullable = false)
	public Float getValor() {
		return valor;
	}

	@Column(name = "detalhes", columnDefinition = "varchar(150)")
	public String getDetalhes() {
		return detalhes;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	public void setRestaurante(RestauranteModel restaurante) {
		this.restaurante = restaurante;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public void setValor(Float valor) {
		this.valor = valor;
	}
	public void setDetalhes(String detalhes) {
		this.detalhes = detalhes;
	}
}