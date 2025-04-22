import API_URL from "./config";

export default async function cadastrarAluno(dados) {
  try {
    const response = await fetch(`${API_URL}/alunos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar aluno");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao cadastrar aluno:", error);
    throw error;
  }
}
