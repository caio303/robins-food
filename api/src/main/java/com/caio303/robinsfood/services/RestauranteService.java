package com.caio303.robinsfood.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caio303.robinsfood.dtos.CadastroRestauranteDTO;
import com.caio303.robinsfood.models.RestauranteModel;
import com.caio303.robinsfood.repositories.RestauranteRepository;

@Service
public class RestauranteService {

	@Autowired
	private RestauranteRepository restauranteRepository;
	
	public List<RestauranteModel> getTodosRestaurantes() {
		return restauranteRepository.findAll();
	}

	public Optional<RestauranteModel> getRestauranteById(Integer id) {
		return restauranteRepository.findById(id);
	}
	
	public RestauranteModel cadastrarRestaurante(CadastroRestauranteDTO cadastroDTO) {
		var novoRestaurante = new RestauranteModel(cadastroDTO);
		return restauranteRepository.save(novoRestaurante);
	}
}