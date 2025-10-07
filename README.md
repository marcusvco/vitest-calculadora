# 📑 Documentação do Framework de Teste – Vitest

## 1. Breve Descrição do Framework

O **Vitest** é um framework de testes unitários moderno para aplicações em JavaScript e TypeScript. Ele foi criado para integrar-se de forma nativa ao **Vite**, um *bundler* rápido e eficiente, muito utilizado em projetos front-end modernos.  

Inspirado em frameworks como **Jest**, o Vitest oferece sintaxe similar para criação de testes, tornando sua curva de aprendizado baixa para desenvolvedores já familiarizados com ferramentas anteriores. Além disso, ele suporta:
- Execução rápida de testes devido ao uso do Vite como motor de *bundling*;
- Suporte a **TypeScript** nativo;
- Funcionalidades de *mocking*, *snapshot testing* e *coverage*;
- Integração simples com bibliotecas de front-end (ex.: React, Vue, Svelte).

Por ser mais leve e mais rápido que o Jest em projetos modernos, o Vitest vem ganhando popularidade, especialmente em aplicações que já utilizam Vite no processo de build.

---

## 2. Categorização do Framework

### i) Técnicas de Teste
O Vitest é adequado principalmente para **teste de caixa-branca** e **caixa-cinza**, pois permite inspecionar o código e validar a lógica interna das funções e componentes.  
- **Caixa-preta:** possível em casos onde apenas as entradas e saídas são validadas, sem inspecionar a implementação.  
- **Caixa-branca:** fortemente favorecido, já que o desenvolvedor tem acesso direto ao código e pode escrever testes detalhados sobre o comportamento interno.  

👉 Exemplo: verificar se uma função retorna o valor correto dado um conjunto de entradas específicas.

---

### ii) Níveis de Teste
O Vitest é mais utilizado nos seguintes níveis:
- **Teste Unitário:** principal uso, validando funções, classes e componentes de forma isolada.  
- **Teste de Integração:** possível, quando combinamos múltiplos módulos ou componentes e validamos seu comportamento conjunto.  
- **Teste de Sistema:** não é o foco, mas pode ser parcialmente explorado quando combinado com ferramentas de *end-to-end testing* como Cypress ou Playwright.  

---

### iii) Tipos de Teste
- **Funcionais:** foco principal, verificando se a aplicação funciona conforme esperado.  
- **Automatizados:** todos os testes no Vitest são automatizados.  
- **Não-funcionais:** o suporte é limitado, mas é possível estender para análise de cobertura de código e desempenho em alguns casos.  

👉 Conclusão: O Vitest se enquadra melhor em **testes unitários funcionais automatizados**.

---

## 3. Instalação e Integração

### Passos de Instalação
1. Criar um projeto com Vite:
   ```bash
   npm create vite@latest meu-projeto
   cd meu-projeto
