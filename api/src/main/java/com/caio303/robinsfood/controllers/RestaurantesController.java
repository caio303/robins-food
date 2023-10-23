package com.caio303.robinsfood.controllers;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.caio303.robinsfood.dtos.CadastroRestauranteDTO;
import com.caio303.robinsfood.models.RestauranteModel;
import com.caio303.robinsfood.services.RestauranteService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/restaurante")
public class RestaurantesController {
	
	@Autowired
	private RestauranteService restauranteService;
	

	@GetMapping(value = "/")
	private ResponseEntity<List<RestauranteModel>> getTodosRestaurantes() {
		return ResponseEntity.ok(restauranteService.getTodosRestaurantes());
	}
	
	@GetMapping(value = "/{restauranteId}")
	private ResponseEntity<RestauranteModel> getRestaurantePorId(@RequestParam Integer restauranteId) {
		Optional<RestauranteModel> optRestaurante = restauranteService.getRestauranteById(restauranteId);
		
		if (optRestaurante.isPresent())
			return ResponseEntity.ok(optRestaurante.get());
		
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	private ResponseEntity<RestauranteModel> cadastrarRestaurante(@RequestBody CadastroRestauranteDTO cadastroDTO) {
		var restauranteCadastrado = restauranteService.cadastrarRestaurante(cadastroDTO);
		
		if (restauranteCadastrado != null)
			return ResponseEntity.status(HttpStatus.CREATED).build();
		
		return ResponseEntity.internalServerError().build();
	}
	
}