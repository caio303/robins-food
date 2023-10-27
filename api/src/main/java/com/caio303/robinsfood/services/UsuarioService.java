package com.caio303.robinsfood.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caio303.robinsfood.dtos.UsuarioDTO;
import com.caio303.robinsfood.models.UsuarioModel;
import com.caio303.robinsfood.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired private UsuarioRepository usuarioRepository;
	
	public List<UsuarioModel> getTodosUsuarios() {
		return usuarioRepository.findAll();
	}

	public Optional<UsuarioModel> getUsuarioPorId(Integer usuarioId) {
		return usuarioRepository.findById(usuarioId);
	}

	public UsuarioModel cadastrarUsuario(UsuarioDTO usuarioDTO) {
		return usuarioRepository.save(new UsuarioModel(usuarioDTO));
	}

}