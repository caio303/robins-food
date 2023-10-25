package com.caio303.robinsfood.controllers;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.caio303.robinsfood.dtos.CadastroItemCatalogoDTO;
import com.caio303.robinsfood.dtos.CadastroRestauranteDTO;
import com.caio303.robinsfood.dtos.ItemCatalogoDTO;
import com.caio303.robinsfood.dtos.RestauranteComCatalogoDTO;
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
	}
	
	@GetMapping(value = "/{restauranteId}")
	private ResponseEntity<RestauranteComCatalogoDTO> getRestaurantePorId(
			@PathVariable("restauranteId") Integer restauranteId, 
			@RequestParam(name = "incluirCatalogo", required = false) boolean incluirCatalogo
		) {
		if (Objects.isNull(restauranteId))
			return ResponseEntity.badRequest().build();
			
		var optRestaurante = restauranteService.getRestauranteById(restauranteId);
		
		if (optRestaurante.isPresent()) {
			var restauranteComCatalogo = restauranteService.adicionarCatalogoAoRestaurante(optRestaurante.get(), incluirCatalogo);
			return ResponseEntity.ok(restauranteComCatalogo);
		}
		
		return ResponseEntity.notFound().build();
	}

	@GetMapping(value = "/{restauranteId}/catalogo")
	private ResponseEntity<List<ItemCatalogoDTO>> getCatalogoRestaurante(@PathVariable Integer restauranteId) {
		return ResponseEntity.ok(itemRestauranteService.getCatalogoRestaurante(restauranteId));
	}
	
	@PostMapping(value = "/{restauranteId}/catalogo")
	private ResponseEntity<ItemRestauranteModel> adicionarItemAoCatalogoDoRestaurante(@PathVariable Integer restauranteId, @RequestBody CadastroItemCatalogoDTO cadastroItemCatalogoDTO) {
		var itemAdicionado = itemRestauranteService.adicionarItemAoCatalogoDoRestaurante(restauranteId, cadastroItemCatalogoDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body(itemAdicionado);
	}
	
	@DeleteMapping(value = "/{restauranteId}/catalogo/{itemNoCatalogoId}")
	private ResponseEntity<Object> removerItemDoCatalogoDoRestaurante(@PathVariable Integer restauranteId, @PathVariable Integer itemNoCatalogoId) {
		itemRestauranteService.removerItemDoCatalogoDoRestaurante(restauranteId, itemNoCatalogoId);
		return ResponseEntity.status(HttpStatus.OK).body("O item "+itemNoCatalogoId+" foi removido.");
	}
	
}