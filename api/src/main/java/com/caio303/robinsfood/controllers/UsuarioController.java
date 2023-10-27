package com.caio303.robinsfood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.caio303.robinsfood.dtos.UsuarioDTO;
import com.caio303.robinsfood.models.UsuarioModel;
import com.caio303.robinsfood.services.UsuarioService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/usuarios")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	ResponseEntity<List<UsuarioModel>> getTodosUsuarios() {
		return ResponseEntity.ok(usuarioService.getTodosUsuarios());
	}
	
	@GetMapping("/{usuarioId}")
	ResponseEntity<UsuarioModel> getUsuarioPorId(@PathVariable("usuarioId") Integer usuarioId) {
		var optUsuario = usuarioService.getUsuarioPorId(usuarioId);
		
		if (optUsuario.isEmpty())
			return ResponseEntity.notFound().build();
			
		return ResponseEntity.ok(optUsuario.get());
	}
	
	@PostMapping
	ResponseEntity<UsuarioModel> cadastrarUsuario(@RequestBody(required = true) UsuarioDTO usuarioDTO) {
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.cadastrarUsuario(usuarioDTO));
	}
	
}