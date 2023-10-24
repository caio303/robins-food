package com.caio303.robinsfood.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caio303.robinsfood.dtos.CadastroItemCatalogoDTO;
import com.caio303.robinsfood.models.ItemRestauranteModel;
import com.caio303.robinsfood.repositories.ItemRestauranteRepository;

@Service
public class ItemRestauranteService {

	@Autowired
	private ItemRestauranteRepository itemRestauranteRepository;
	
	public List<ItemRestauranteModel> getCatalogoRestaurante(Integer idRestaurante) {
		return itemRestauranteRepository.findAllByIdRestaurante(idRestaurante);
	}
	
	public ItemRestauranteModel adicionarItemAoCatalogoDoRestaurante(Integer idRestaurante, CadastroItemCatalogoDTO cadastroItemCatalogoDTO) {
		return itemRestauranteRepository.save(new ItemRestauranteModel(idRestaurante, cadastroItemCatalogoDTO));
	};
}