package com.apisys.aluno.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.apisys.aluno.model.Aluno;
import com.apisys.aluno.repository.AlunoRepository;

/**
 * Classe passivel de atender as requisições http -> @RestController
 */
@RestController
@CrossOrigin("${origem-permitida}")
public class AlunoResource {

	@Autowired
	private AlunoRepository alunoRepository;
	
	@GetMapping("/alunos") //requisição do tipo GET
	public List<Aluno> listar(){
		return alunoRepository.findAll();
	}
	
	@PostMapping("/alunos")
	public Aluno adicionar(@RequestBody @Valid Aluno aluno) {
		return alunoRepository.save(aluno);
	}
	
	@PutMapping("/alunos")
	public Aluno editar(@RequestBody @Valid Aluno aluno) {
		return alunoRepository.save(aluno);
	}
	
	@SuppressWarnings("rawtypes")
	@DeleteMapping("/alunos/{id}")
	public ResponseEntity remover(@PathVariable Long id) {
		try {
			alunoRepository.delete(id);
			return new ResponseEntity(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.EXPECTATION_FAILED);
		}
	}
}
