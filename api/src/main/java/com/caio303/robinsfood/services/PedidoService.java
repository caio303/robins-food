package com.caio303.robinsfood.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caio303.robinsfood.dtos.ItemCatalogoDTO;
import com.caio303.robinsfood.dtos.PedidoDTO;
import com.caio303.robinsfood.models.ItemPedidoModel;
import com.caio303.robinsfood.models.PedidoModel;
import com.caio303.robinsfood.repositories.ItemPedidoRepository;
import com.caio303.robinsfood.repositories.ItemRestauranteRepository;
import com.caio303.robinsfood.repositories.PedidoRepository;
import com.caio303.robinsfood.repositories.RestauranteRepository;
import com.caio303.robinsfood.repositories.UsuarioRepository;

@Service
public class PedidoService {

	@Autowired private PedidoRepository pedidoRepository;
	@Autowired private UsuarioRepository usuarioRepository;
	@Autowired private RestauranteRepository restauranteRepository;
	@Autowired private ItemPedidoRepository itemPedidoRepository;
	@Autowired private ItemRestauranteRepository itemRestauranteRepository;
	
	public List<PedidoDTO> getPedidosDoCliente(Integer clienteId, boolean incluirItens) {
		List<PedidoDTO> pedidosDoCliente = pedidoRepository.findAllByClienteId(clienteId)
				.stream().map(PedidoDTO::new).collect(Collectors.toList());
		
		pedidosDoCliente.stream().forEach(pedido -> {
			List<ItemCatalogoDTO> itensDoPedido = itemPedidoRepository.findAllByPedidoId(pedido.getId())
					.stream().map(ItemCatalogoDTO::new).collect(Collectors.toList());
			pedido.setItens(itensDoPedido);
		});
		
		return pedidosDoCliente;
	}

	public Optional<PedidoDTO> cadastrarPedido(PedidoDTO pedidoParaCadastrar) {
		var optUsuario = usuarioRepository.findById(pedidoParaCadastrar.getClienteId());
		var optRestaurante = restauranteRepository.findById(pedidoParaCadastrar.getRestauranteId());
		
		if (optUsuario.isEmpty() || optRestaurante.isEmpty())
			return Optional.empty();
		
		if (Objects.isNull(pedidoParaCadastrar.getEnderecoEntrega()))
			pedidoParaCadastrar.setEnderecoEntrega(optUsuario.get().getEndereco());
		
		var pedidoModel = new PedidoModel(pedidoParaCadastrar, optRestaurante.get(), optUsuario.get());
		var pedidoCadastrado = pedidoRepository.save(pedidoModel);
		
		var listaItensModelSalvos = new ArrayList<ItemPedidoModel>();
		
		pedidoParaCadastrar.getItens().forEach(itemCatalogoDTO -> {
			var optItemRestaurante = itemRestauranteRepository.findById(itemCatalogoDTO.getId());
			
			if (optItemRestaurante.isEmpty()) return;
			
			var quantidadeItemNoPedido = Objects.nonNull(itemCatalogoDTO.getQuantidade()) ? itemCatalogoDTO.getQuantidade() : 1;
			var itemPedidoModel = new ItemPedidoModel(quantidadeItemNoPedido, optItemRestaurante.get(), pedidoCadastrado);
			listaItensModelSalvos.add(itemPedidoRepository.save(itemPedidoModel));
		});
		
		pedidoParaCadastrar.setId(pedidoCadastrado.getId());
		pedidoParaCadastrar.setData(pedidoCadastrado.getData());
		pedidoParaCadastrar.setItens(listaItensModelSalvos
				.stream().map(ItemCatalogoDTO::new).collect(Collectors.toList()));
		
		return Optional.of(pedidoParaCadastrar);
	}
	
}