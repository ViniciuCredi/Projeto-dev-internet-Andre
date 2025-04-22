package com.seuprojeto.cadastro_aluno.repository;


import com.seuprojeto.cadastro_aluno.model.Aluno;
import org.springframework.data.mongodb.core.MongoAdminOperations;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoRepository extends MongoRepository<Aluno, String> {
}
