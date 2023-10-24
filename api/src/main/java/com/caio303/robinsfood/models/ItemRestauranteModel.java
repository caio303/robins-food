package com.caio303.robinsfood.models;

import com.caio303.robinsfood.dtos.CadastroItemCatalogoDTO;

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
	private Integer restauranteId;
	private String nome;
	private Float valor;
	private String detalhes; // Detalhes separados por essa sequencia: ']**,**['
	
	public ItemRestauranteModel() { super(); }
	
	public ItemRestauranteModel(Integer idRestaurante, CadastroItemCatalogoDTO cadastroItemCatalogoDTO) {
		this.restauranteId = idRestaurante;
		this.nome = cadastroItemCatalogoDTO.getNome();
		this.valor = cadastroItemCatalogoDTO.getValor();
		this.detalhes = String.join("]**,**[", cadastroItemCatalogoDTO.getDetalhes());
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	@ManyToOne(targetEntity = RestauranteModel.class)
    @JoinColumn(name = "id_restaurante", referencedColumnName = "id", nullable = false)
	public Integer getRestauranteId() {
		return restauranteId;
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
	public void setRestauranteId(Integer restauranteId) {
		this.restauranteId = restauranteId;
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