# 🚀 QA BDD com Cucumber.js + JavaScript

[![Node.js](https://img.shields.io/badge/Node.js-14%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-6%2B-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Cucumber.js](https://img.shields.io/badge/Cucumber.js-8%2B-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)](https://cucumber.io/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

---

## 📑 Índice
- [Visão Geral do Projeto](#-visão-geral-do-projeto)
- [Fundamentos do BDD](#-fundamentos-do-bdd)
- [Configuração do Ambiente](#️-configuração-do-ambiente)
- [Técnicas de Teste](#️-técnicas-de-teste)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Execução dos Testes](#execução-dos-testes)

---

## 🔍 Visão Geral do Projeto

### 🎯 Objetivo
Demonstrar na prática como implementar testes de comportamento (BDD) para validar:
- RF001: Pessoas maiores de 17 anos podem consumir bebida alcoólica.
- RF002: Pessoas menores de 17 anos não podem consumir bebida alcoólica.

### 🛠 Tecnologias Utilizadas
| Tecnologia | Função | Versão |
|------------|--------|--------|
| Node.js | Ambiente de execução | 14+ |
| Cucumber.js | Framework BDD | 8.x |
| GitHub Actions | CI/CD | - |

## 📚 Fundamentos do BDD

### ❓ O que é BDD?
**Behavior-Driven Development** é uma abordagem que:
- Foca no comportamento do sistema
- Usa linguagem natural para descrever testes
- Promove colaboração entre times

### ✅ Benefícios
- Melhora a comunicação entre stakeholders
- Documentação viva e sempre atualizada
- Reduz ambiguidades nos requisitos

### ⚠️ Armadilhas Comuns (por Elias Nogueira)
- Tratar BDD apenas como ferramenta de automação
- Ignorar a fase de colaboração ("Three Amigos")
- Escrever cenários muito técnicos

## 🛠️ Configuração do Ambiente
## ✅ Técnica Utilizada: Partição de Equivalência

O cenário acima aplica a técnica de **Partição de Equivalência**, uma abordagem de **teste de caixa preta** que divide as entradas possíveis em **classes de equivalência**, onde cada classe representa um conjunto de valores tratados da mesma forma pelo sistema.

### 💡 Como está sendo aplicada:

Neste caso, o critério de negócio é verificar se uma pessoa pode consumir bebida alcoólica, considerando a idade. Com base nisso, temos:

#### Classe 1 – Idade menor que 18 anos (inválida):

- A resposta esperada é **"Não"**  
- Exemplos utilizados: `0`, `16`, `17`

#### Classe 2 – Idade igual ou maior que 18 anos (válida):

- A resposta esperada é **"Sim"**  
- Exemplos utilizados: `18`, `56`

Esses valores representam diferentes **partições de equivalência**, cobrindo tanto o comportamento esperado para entradas válidas quanto inválidas.

---

## ⚠️ Técnica Complementar: Análise de Valor Limite

Há também uma aplicação parcial da técnica de **Análise de Valor Limite**, que testa os **limites entre partições**:

- **Valor 17**: último valor que ainda **não permite consumo** (limite inferior inválido)  
- **Valor 18**: primeiro valor que **permite consumo** (limite superior válido)

Essa técnica é útil para identificar falhas em regras que envolvem **limites ou fronteiras**.

---

## ✅ Conclusão

O cenário BDD apresentado implementa as seguintes técnicas de teste:

- **Partição de Equivalência** – como técnica principal para representar comportamentos esperados com base em faixas de idade.
- **Análise de Valor Limite** – utilizada de forma complementar para testar a transição entre comportamentos válidos e inválidos.

Essas práticas ajudam a garantir que a **lógica de negócio esteja corretamente implementada** com uma **quantidade eficiente de casos de teste**.

### 📥 Instalação
```bash
git clone https://github.com/marcio-fs/qa-bdd-cucumberjs.git
cd qa-bdd-cucumberjs
npm install

npm test  # Executa todos os cenários
npm run test:watch  # Modo watch
```
#### 🏗 Estrutura do Projeto 
```bash
qa.bdd-cucumberjs.javascript/
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 main.yml
├── 📁 features/
│   ├── 📄 pessoa.feature
│   └── 📁 step_definitions/
│       └── 📄 pessoa_steps.js
├── 📁 src/
│   └── 📄 Pessoa.js
├── 📄 package.json
└── 📄 README.md
```

---

**Nota:** Este projeto é apenas para fins de avaliação técnica.