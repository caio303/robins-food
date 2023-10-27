package com.caio303.robinsfood.models;


import java.time.Instant;
import java.util.Date;
import java.util.Objects;

import org.springframework.data.annotation.CreatedDate;

import com.caio303.robinsfood.dtos.PedidoDTO;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "pedido")
public class PedidoModel {

	private Integer id;
	private String enderecoEntrega;
	private Date data;
	private Float valorTotal;
	private RestauranteModel restaurante;
	private UsuarioModel cliente;
	
	public PedidoModel() { super(); }
	
	public PedidoModel(PedidoDTO dto, RestauranteModel restaurante, UsuarioModel usuario) {
		this.id = dto.getId();
		this.enderecoEntrega = dto.getEnderecoEntrega();
		this.data = Objects.nonNull(dto.getData()) ? dto.getData() : Date.from(Instant.now());
		this.valorTotal = dto.getValorTotal();
		this.restaurante = restaurante;
		this.cliente = usuario;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() { return id; }
	
	@Column(name = "endereco_entrega", columnDefinition = "varchar(120)")
	public String getEnderecoEntrega() { return enderecoEntrega; }
	
	@CreatedDate
	@Column(name = "data")
	public Date getData() { return data; }

	@Column(name = "valor_total", nullable = false)
	public Float getValorTotal() { return valorTotal; }

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = RestauranteModel.class)
    @JoinColumn(name = "id_restaurante", referencedColumnName = "id")
	public RestauranteModel getRestaurante() { return restaurante; }

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = UsuarioModel.class)
    @JoinColumn(name = "id_cliente", referencedColumnName = "id")
	public UsuarioModel getCliente() { return cliente; }
	
	public void setId(Integer id) {
		this.id = id;
	}
	public void setEnderecoEntrega(String enderecoEntrega) {
		this.enderecoEntrega = enderecoEntrega;
	}
	public void setData(Date data) {
		this.data = data;
	}
	public void setValorTotal(Float valorTotal) {
		this.valorTotal = valorTotal;
	}
	public void setRestaurante(RestauranteModel restaurante) {
		this.restaurante = restaurante;
	}
	public void setCliente(UsuarioModel cliente) {
		this.cliente = cliente;
	}
}