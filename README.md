# 🛒 Landing Page com Checkout Inteligente & QA Automation

Projeto de Landing Page moderna para venda de produto único (SmartWatch), com foco em resiliência de software e automação de testes.

## 🧠 Eixo Profissional

- Analista de Qualidade (QA Funcional)
- Analista de Operações Digitais

## 🛠️ Tecnologias e Ferramentas

- **Frontend:** HTML5, Tailwind CSS, JavaScript.
- **QA & Automação:** Cypress.
- **IA:** Google AI Studio (utilizada para geração de massa de dados e lógica de validação).
- **CI/CD:** GitHub Actions com notificações via Discord.

## 🧩 Onde a IA entrou

A IA foi utilizada para simular cenários de usuários reais e gerar inputs maliciosos (XSS) para validar a segurança dos campos de cupom e CEP.

## 🔍 Análise Orientada à Consequência

- **Falha Identificada:** Inconsistência na máscara de CEP.
- **Risco:** Perda de conversão por erro de preenchimento.
- **Solução:** Implementação de validação rigorosa via script testada por automação.

## 🚀 Como rodar

1. Clone o repositório.
2. `npm install`
3. `npx cypress open`
