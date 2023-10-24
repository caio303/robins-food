package com.caio303.robinsfood.controllers;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.caio303.robinsfood.dtos.CadastroRestauranteDTO;
import com.caio303.robinsfood.models.ItemRestauranteModel;
import com.caio303.robinsfood.models.RestauranteModel;
import com.caio303.robinsfood.services.ItemRestauranteService;
import com.caio303.robinsfood.services.RestauranteService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/restaurantes")
public class RestaurantesController {
	
	@Autowired
	private RestauranteService restauranteService;
	
	@Autowired
	private ItemRestauranteService itemRestauranteService;
	

	@GetMapping
	private ResponseEntity<List<RestauranteModel>> getTodosRestaurantes() {
		return ResponseEntity.ok(restauranteService.getTodosRestaurantes());
	}
	
	@PostMapping
	private ResponseEntity<Object> cadastrarRestaurante(@RequestBody CadastroRestauranteDTO cadastroDTO) {
		restauranteService.cadastrarRestaurante(cadastroDTO);
		return ResponseEntity.status(HttpStatus.CREATED).build();
		// return ResponseEntity.internalServerError().build();
	}
	
	@GetMapping(value = "/{restauranteId}")
	private ResponseEntity<RestauranteModel> getRestaurantePorId(@PathVariable("restauranteId") Integer restauranteId) {
		if (Objects.isNull(restauranteId))
			return ResponseEntity.badRequest().build();
			
		Optional<RestauranteModel> optRestaurante = restauranteService.getRestauranteById(restauranteId);
		
		if (optRestaurante.isPresent())
			return ResponseEntity.ok(optRestaurante.get());
		
		return ResponseEntity.notFound().build();
	}

	@GetMapping(value = "/{restauranteId}/catalogo")
	private ResponseEntity<List<ItemRestauranteModel>> getCatalogoRestaurante(@RequestParam Integer restauranteId) {
		return ResponseEntity.ok(itemRestauranteService.getCatalogoRestaurante(restauranteId));
		
	}
	
	@PostMapping(value = "/{restauranteId}/catalogo")
	private ResponseEntity<List<ItemRestauranteModel>> adicionarItemAoCatalogoDoRestaurante(@RequestParam Integer restauranteId) {
		return ResponseEntity.ok(itemRestauranteService.getCatalogoRestaurante(restauranteId));
		
	}
	
}