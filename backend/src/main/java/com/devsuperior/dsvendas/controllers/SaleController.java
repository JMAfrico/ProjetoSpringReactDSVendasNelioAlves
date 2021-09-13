package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.DTO.SaleDTO;
import com.devsuperior.dsvendas.DTO.SalesSucessDTO;
import com.devsuperior.dsvendas.DTO.SalesSumDTO;
import com.devsuperior.dsvendas.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService service;
	
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable page){
		Page<SaleDTO> list = service.findAll(page);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value="/amount-by-seller")
	public ResponseEntity<List<SalesSumDTO>> amountGroupedBySeller(){
		List<SalesSumDTO> list = service.amountGroupedBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value="/sucess-by-seller")
	public ResponseEntity<List<SalesSucessDTO>> sucessGroupedBySeller(){
		List<SalesSucessDTO> list = service.sucessGroupedBySeller();
		return ResponseEntity.ok(list);
	}
	
}
