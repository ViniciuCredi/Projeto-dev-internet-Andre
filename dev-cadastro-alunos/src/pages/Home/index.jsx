import { useState, useEffect } from 'react';
import cadastrarAluno from "../../config/api";
import API_URL from "../../config/config";
import './style.css';

function Home() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');

  const fetchAlunos = async () => {
    try {
      const response = await fetch(`${API_URL}/alunos`);
      const listaAlunos = await response.json();
      console.log("Alunos recebidos:", listaAlunos); // <-- adiciona isso
      setAlunos(listaAlunos);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const aluno = {
      nome,
      telefone,
      email,
      endereco,
    };

    try {
      await cadastrarAluno(aluno);
      fetchAlunos();
      // Limpa os campos depois de cadastrar
      setNome('');
      setTelefone('');
      setEmail('');
      setEndereco('');
    } catch (error) {
      console.error('Erro ao cadastrar aluno:', error);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Alunos</h1>
        <input
          type="text"
          placeholder="NOME ALUNO"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="tel"
          placeholder="TELEFONE"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <input
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="ENDEREÇO"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Home;
