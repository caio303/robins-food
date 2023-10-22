package com.caio303.robinsfood.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/restaurante")
public class RestaurantesController {

	@GetMapping(value = "/todos")
	private ResponseEntity<Object> getTodosRestaurantes() {
		
		return ResponseEntity.ok("Numero de restaurantes cadastrados: " + Integer.MAX_VALUE);
	}
	
	@GetMapping(value = "/{restauranteId}")
	private ResponseEntity<Object> getRestaurantePorId(@RequestParam Integer restauranteId) {
		return ResponseEntity.ok(restauranteId + " cadastrado, segue informacoes: ");
	}
	
}