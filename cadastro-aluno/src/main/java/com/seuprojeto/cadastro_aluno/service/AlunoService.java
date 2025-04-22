package com.seuprojeto.cadastro_aluno.service;


import com.seuprojeto.cadastro_aluno.model.Aluno;
import com.seuprojeto.cadastro_aluno.repository.AlunoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlunoService {

    private final AlunoRepository alunoRepository;

    public AlunoService(AlunoRepository alunoRepository){
        this.alunoRepository = alunoRepository;
    }

    public Aluno salvarAluno(Aluno aluno){
        return alunoRepository.save(aluno);
    }

    public List<Aluno> listarAluno() {
        return alunoRepository.findAll();
    }
}
