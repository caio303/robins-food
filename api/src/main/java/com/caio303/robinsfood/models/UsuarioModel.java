package com.caio303.robinsfood.models;

import com.caio303.robinsfood.dtos.UsuarioDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class UsuarioModel {
	
	private Integer id;
	private String nome;
	private String cpf;
	private String cep;
	private String email;
	private String telefone;
	private String endereco;

	public UsuarioModel() {	super(); }

	public UsuarioModel(UsuarioDTO dto) {
		this.id = dto.getId();
		this.nome = dto.getNome();
		this.cpf = dto.getCpf();
		this.cep = dto.getCep();
		this.email = dto.getEmail();
		this.telefone = dto.getTelefone();
		this.endereco = dto.getEndereco();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	@Column(name = "nome", columnDefinition = "varchar(80)", nullable = false)
	public String getNome() {
		return nome;
	}

	@Column(name = "cpf", columnDefinition = "varchar(14)", nullable = false, unique = true)
	public String getCpf() {
		return cpf;
	}

	@Column(name = "cep", columnDefinition = "varchar(9)", nullable = false)
	public String getCep() {
		return cep;
	}

	@Column(name = "email", columnDefinition = "varchar(80)", nullable = false)
	public String getEmail() {
		return email;
	}
	
	@Column(name = "telefone", columnDefinition = "varchar(14)", nullable = false)
	public String getTelefone() {
		return telefone;
	}

	@Column(name = "endereco", columnDefinition = "varchar(100)", nullable = false)
	public String getEndereco() {
		return endereco;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
}
