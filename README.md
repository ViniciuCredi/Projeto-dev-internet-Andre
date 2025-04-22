
# Instruções para Rodar o Projeto de Cadastro de Alunos

Este projeto é composto por dois componentes:
1. Backend (Spring Boot + Maven)
2. Frontend (React + Vite)

---

## 🔧 Pré-requisitos

- Java 17 ou superior (recomendado Java 21 ou 24 conforme pom.xml)
- Node.js (versão 18 ou superior)
- Maven
- Git (opcional)
- Navegador Web

---

## 🚀 Backend - Spring Boot

### 📁 Localização:
`cadastro-aluno`

### ▶️ Como rodar:
1. Abra o terminal na pasta `cadastro-aluno`.
2. Rode o comando:

```
./mvnw spring-boot:run
```

> No Windows, use: `mvnw.cmd spring-boot:run`

3. A aplicação será iniciada normalmente na porta **8080** (por padrão).

---

## 💻 Frontend - React + Vite

### 📁 Localização:
`FRONTEND-CADASTRO/dev-cadastro-alunos`

### ▶️ Como rodar:
1. Abra o terminal na pasta `dev-cadastro-alunos`.
2. Instale as dependências:

```
npm install
```

3. Inicie o servidor de desenvolvimento:

```
npm run dev
```

4. Acesse no navegador: [http://localhost:5173](http://localhost:5173)

> Certifique-se de que o backend também esteja rodando.

---

## ✅ Observações

- O front-end faz requisições para a API rodando no `http://localhost:8080`. Verifique se o backend está acessível nessa porta.
- Caso deseje alterar as portas, modifique a configuração no `application.properties` do backend e ajuste as URLs no frontend.

---

Feito com ❤️ para fins acadêmicos.
