package com.caio303.robinsfood.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caio303.robinsfood.dtos.CadastroItemCatalogoDTO;
import com.caio303.robinsfood.dtos.ItemCatalogoDTO;
import com.caio303.robinsfood.models.ItemRestauranteModel;
import com.caio303.robinsfood.models.RestauranteModel;
import com.caio303.robinsfood.repositories.ItemRestauranteRepository;
import com.caio303.robinsfood.repositories.RestauranteRepository;

@Service
public class ItemRestauranteService {

	@Autowired
	private RestauranteRepository restauranteRepository;
	
	@Autowired
	private ItemRestauranteRepository itemRestauranteRepository;
	
	public List<ItemCatalogoDTO> getCatalogoRestaurante(Integer idRestaurante) {
		return itemRestauranteRepository.findAllByIdRestaurante(idRestaurante)
				.stream().map(ItemCatalogoDTO::new).collect(Collectors.toList());
	}
	
	public ItemRestauranteModel adicionarItemAoCatalogoDoRestaurante(Integer idRestaurante, CadastroItemCatalogoDTO cadastroItemCatalogoDTO) {
		Optional<RestauranteModel> optRestaurante = restauranteRepository.findById(idRestaurante);
		if (optRestaurante.isPresent())
			return itemRestauranteRepository.save(new ItemRestauranteModel(optRestaurante.get(), cadastroItemCatalogoDTO));
		else return null;
	}

	public void removerItemDoCatalogoDoRestaurante(Integer restauranteId, Integer itemNoCatalogoId) {
		itemRestauranteRepository.deleteById(itemNoCatalogoId);
	}
}