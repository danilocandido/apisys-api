package com.apisys.aluno.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apisys.aluno.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {

}
