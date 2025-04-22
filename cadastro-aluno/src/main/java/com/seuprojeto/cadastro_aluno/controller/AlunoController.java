package com.seuprojeto.cadastro_aluno.controller;


import com.seuprojeto.cadastro_aluno.model.Aluno;
import com.seuprojeto.cadastro_aluno.service.AlunoService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {

    private final AlunoService alunoService;

    private AlunoController(AlunoService alunoService){
        this.alunoService = alunoService;
    }

    @PostMapping
    public Aluno cadastroAluno(@RequestBody Aluno aluno){
        return alunoService.salvarAluno(aluno);
    }

    @GetMapping
    private List<Aluno> listarAlunos() {
        return alunoService.listarAluno();
    }
}
