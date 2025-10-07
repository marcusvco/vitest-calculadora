# 📑 Documentação do Framework de Teste – Vitest

## 1. Breve Descrição do Framework

O **Vitest** é um framework de testes unitários moderno para aplicações em JavaScript e TypeScript. Ele foi criado para integrar-se de forma nativa ao **Vite**, um *bundler* rápido e eficiente, muito utilizado em projetos front-end modernos.

Inspirado em frameworks como **Jest**, o Vitest oferece sintaxe similar para criação de testes, tornando sua curva de aprendizado baixa para desenvolvedores já familiarizados com ferramentas anteriores. Além disso, ele suporta:
- Execução rápida de testes devido ao uso do Vite como motor de *bundling*;
- Suporte a **TypeScript** nativo;
- Funcionalidades de *mocking*, *snapshot testing* e *coverage*;
- Integração simples com bibliotecas de front-end (ex.: React, Vue, Svelte);
- Relatórios de cobertura e integração com CI/CD;
- Suporte a múltiplos formatos de saída de testes, permitindo exportar resultados para `.json`, `.xml`, `.txt` ou `.md`, facilitando a documentação.

Por ser mais leve e mais rápido que o Jest em projetos modernos, o Vitest vem ganhando popularidade, especialmente em aplicações que já utilizam Vite no processo de build.

---

## 2. Categorização do Framework

### i) Técnicas de Teste
O Vitest é adequado principalmente para **teste de caixa-branca** e **caixa-cinza**, pois permite inspecionar o código e validar a lógica interna das funções e componentes.
- **Caixa-preta:** possível quando apenas entradas e saídas são validadas, sem inspecionar a implementação.
- **Caixa-branca:** fortemente favorecido, pois o desenvolvedor tem acesso direto ao código e pode escrever testes detalhados sobre o comportamento interno.

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
- **Regressão:** automatização permite reaproveitamento dos testes para garantir que novas mudanças não quebrem funcionalidades já existentes.
- **Comportamento:** permite escrita de testes descritivos usando a abordagem BDD (`describe`, `it`).

👉 Conclusão: O Vitest se enquadra melhor em **testes unitários funcionais automatizados**, podendo ser estendido para outros tipos e estratégias conforme necessário.

---

## 3. Instalação e Integração

### Passos de Instalação

1. Criar um projeto com Vite:
   ```bash
   npm create vite@latest meu-projeto
   cd meu-projeto
   ```
2. Instalar o Vitest:
   ```bash
   npm install -D vitest
   ```
3. Configurar no package.json:
   ```json
   {
     "scripts": {
       "test": "vitest"
     }
   }
   ```
4. Executar os testes:
   ```bash
   npm run test
   ```

#### Integração com outras ferramentas

- Para relatórios de cobertura:
   ```bash
   npm install -D @vitest/coverage-c8
   ```
   E adicionar no script:
   ```json
   "test:coverage": "vitest run --coverage"
   ```
- Para integração com CI/CD, basta rodar o comando de teste nas etapas de pipeline (Exemplo: GitHub Actions).
- Para exportar os resultados dos testes para um arquivo `.txt`, `.md`, ou `.json`:
   ```bash
   npx vitest run > resultado.txt
   npx vitest run > resultado.md
   npx vitest run --reporter=json > resultado.json
   ```
  Isso facilita a documentação dos resultados e auditoria do processo de teste.

---

## 4. Estratégia de Derivação dos Casos de Teste

Para garantir qualidade, utilizamos estratégias como:
- **Particionamento de Equivalência:** testando classes de entrada distintas (inteiros, decimais, strings, valores inválidos).
- **Valor Limite:** testando bordas como zero, números grandes, negativos.
- **Teste de Tipos:** incluindo entradas como string, null, undefined, objetos.

Essa abordagem permite cobrir cenários relevantes, identificar falhas de conversão de tipos e garantir que o sistema responde corretamente tanto a entradas esperadas quanto inesperadas.

---

## 5. Detalhamento do Caso de Teste: Calculadora

O caso de teste desenvolvido utiliza funções matemáticas básicas (soma, subtração, multiplicação e divisão) para validar o funcionamento do framework e a robustez das funções implementadas.

**Cenários cobertos:**
- Operações com inteiros positivos, negativos e decimais;
- Operações envolvendo zero;
- Números grandes;
- Entrada de strings convertíveis para número;
- Entrada de valores inválidos (undefined, null, objeto);
- Divisão por zero.

**Resultados observados:**
- As funções se comportaram conforme esperado para entradas válidas, retornando resultados matematicamente corretos.
- Para a entrada `null`, os testes esperavam que o retorno fosse `NaN`, mas no JavaScript a conversão de `null` para número resulta em `0`. Por isso, operações como soma, subtração, multiplicação e divisão retornaram valores numéricos quando o esperado era `NaN`, levando à falha desses testes.
- Os testes para `undefined` e objetos retornaram `NaN`, conforme esperado.
- O Vitest sinalizou esses casos de divergência, mostrando claramente como o comportamento da linguagem pode afetar o resultado dos testes.
- O teste de divisão por zero retornou `NaN`, como previsto na lógica da função.

**Aprendizado:**
- O uso de testes automatizados com Vitest revelou comportamentos específicos do JavaScript, como a conversão de tipos, que pode surpreender o desenvolvedor.
- O framework é eficiente para identificar divergências entre implementação e expectativa, colaborando para a melhoria do código e da qualidade do software.
- É fundamental alinhar a expectativa dos testes com o comportamento real da linguagem utilizada ou ajustar a implementação para tratar casos específicos conforme a regra de negócio.

---

## 6. Conclusão

O Vitest se mostrou eficiente para validar o comportamento das funções da calculadora em diversos cenários, incluindo bordas e entradas inválidas. O framework facilita a identificação de divergências entre implementação e expectativa, colaborando diretamente para a qualidade do software e para o aprendizado sobre o ambiente JavaScript/TypeScript.

---

## 7. Referências

- [Documentação Oficial do Vitest](https://vitest.dev/)
- [Vite - Documentação](https://vitejs.dev/)
- [Guia de Reporters Vitest](https://vitest.dev/guide/reporters.html)