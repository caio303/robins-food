package com.caio303.robinsfood.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.caio303.robinsfood.dtos.CadastroRestauranteDTO;
import com.caio303.robinsfood.dtos.RestauranteComCatalogoDTO;
import com.caio303.robinsfood.models.RestauranteModel;
import com.caio303.robinsfood.repositories.ItemRestauranteRepository;
import com.caio303.robinsfood.repositories.RestauranteRepository;

@Service
public class RestauranteService {

	@Autowired
	private RestauranteRepository restauranteRepository;
	
	@Autowired
	private ItemRestauranteService itemRestauranteService;
	
	public List<RestauranteModel> getTodosRestaurantes() {
		return restauranteRepository.findAll();
	}

	public Optional<RestauranteModel> getRestauranteById(Integer id) {
		return restauranteRepository.findById(id);
	}
	
	public void cadastrarRestaurante(CadastroRestauranteDTO cadastroDTO) {
		var novoRestaurante = new RestauranteModel(cadastroDTO);
		this.save(novoRestaurante);
	}
	
	public RestauranteComCatalogoDTO adicionarCatalogoAoRestaurante(RestauranteModel restauranteModel, boolean incluirCatalogo) {
		var restauranteDTO = new RestauranteComCatalogoDTO(restauranteModel);
		
		if (Boolean.TRUE.equals(incluirCatalogo))
			restauranteDTO.setCatalogo(itemRestauranteService.getCatalogoRestaurante(restauranteDTO.getId()));
		
		return restauranteDTO;
	}
	
	@Transactional
	private void save(RestauranteModel s) {
		restauranteRepository.save(s.getDistancia(), s.getHorarioAbertura(), s.getHorarioFechamento(), s.getImagem(), s.getNome());
	}

}