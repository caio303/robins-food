package com.caio303.robinsfood.controllers;

import java.util.List;

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

import com.caio303.robinsfood.dtos.PedidoDTO;
import com.caio303.robinsfood.services.PedidoService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/pedidos")
public class PedidoController {
	
	@Autowired
	private PedidoService pedidoService;
	
	@GetMapping
	ResponseEntity<List<PedidoDTO>> getPedidosDoCliente(
			@RequestParam(name = "clienteId", required = true) Integer clienteId,
			@RequestParam(name = "clienteId", required = false) boolean incluirItens) {
		return ResponseEntity.ok(pedidoService.getPedidosDoCliente(clienteId, incluirItens));
	}
	
	@PostMapping
	ResponseEntity<PedidoDTO> cadastrarPedido(@RequestBody PedidoDTO pedidoDTO) {
		var optPedidoCadastrado = pedidoService.cadastrarPedido(pedidoDTO);
		
		if (optPedidoCadastrado.isEmpty())
			return ResponseEntity.notFound().build();
		
		return ResponseEntity.status(HttpStatus.CREATED).body(optPedidoCadastrado.get());
	}
	
}