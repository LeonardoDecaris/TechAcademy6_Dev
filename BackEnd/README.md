# Tech Academy 5 - BackEnd

Repositório da API do projeto **Tech Academy 5**, desenvolvido em Node.js com TypeScript. 

---

## 🧰 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **TypeScript** – Superset de JavaScript com tipagem estática
- **Express** – Framework web minimalista para Node.js
- **Sequelize** – ORM para banco de dados SQL
- **MySQL** – Banco de dados relacional
- **Dotenv** – Gerenciamento de variáveis de ambiente
- **Bearer Token + JWT** – Autenticação e autorização
- **Zod** – Validação de dados
- **Jest** – Testes automatizados
- **Swagger** – Documentação interativa da API

---

## ⚙️ Configurações do Projeto

| Ambiente         | Banco de Dados           | Porta             |
|------------------|--------------------------|-------------------|
| Desenvolvimento  | `harmonicsound_homolog`  | `localhost:3000`  |
| Testes           | `harmonicsound_test`     | `localhost:3000`  |

---

## 📦 Instalação e Inicialização

### 1. Clone o projeto

```bash
git clone https://github.com/LeonardoDecaris/TechAcademy5_backEnd
cd TechAcademy5_backEnd
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto

```bash
npm run dev
```

---

## 📚 Documentação da API

Acesse a documentação Swagger diretamente pelo navegador:

```
http://localhost:3000/api-docs
```

---

## 🔗 Rotas da API

| Recurso        | Rota                   |
|----------------|------------------------|
| 📘 Swagger      | `/api-docs`            |
| 👤 Usuários     | `/users`               |
| 🔐 Login        | `/login`               |
| 🎧 Itens        | `/items`               |
| ⭐ Favoritos     | `/favorites`           |
| 🗂 Categorias    | `/categories`          |
| ✍️ Autores      | `/authors`             |

---

## 🧪 Testes

Os testes automatizados utilizam a base de dados `harmonicsound_test`.

Para executar:

```bash
npm run test
```

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.
