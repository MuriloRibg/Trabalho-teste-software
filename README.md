
# Plano de Teste

**Portal do Aluno**

*versão 3.24.1111.1*

## 1 - Introdução

Este documento abrange os testes a serem realizados no sistema "Portal do Aluno", versão 3.24.1111.1, incluindo testes de funcionalidade, segurança, performance e integração entre os módulos. O objetivo é assegurar que o sistema atenda aos requisitos funcionais e não funcionais definidos para o projeto, proporcionando uma experiência estável e eficiente para alunos. Serão descritos os recursos de hardware e software necessários, as estratégias de teste a serem aplicadas e um cronograma detalhado para o acompanhamento do progresso dos testes ao longo do projeto.

## 2 - Requisitos a Testar

Os requisitos foram organizados em dois grupos: casos de uso e requisitos não funcionais. Abaixo, estão listados os principais requisitos que precisam ser testados para garantir o funcionamento adequado do portal:

### Casos de uso:

Identificador do caso de uso | Nome do caso de uso
-----------------------------|---------------------
id UC1                       | Login de Usuário
id UC2                       | Consulta de Notas e Frequência
id UC3                       | Realização de Matrícula
id UC4                       | Atualização de Informações Cadastrais

### Requisitos não-funcionais:

Identificador do requisito   | Nome do requisito
-----------------------------|---------------------
id req1                      | Performance e tempo de resposta
id req2                      | Segurança e controle de acesso
id req3                      | Compatibilidade com diferentes navegadores e dispositivos

## 3 - Tipos de Teste

Os testes planejados para o sistema "Portal do Aluno" incluem diferentes tipos para assegurar a funcionalidade, segurança e confiabilidade do sistema. Seguem os detalhes sobre cada tipo de teste a ser realizado:

### 3.1 - Métodos da Classe 

**Objetivo:** Verificar se os métodos das classes estão retornando os valores esperados, atendendo aos casos de uso de login, cadastro, matrícula, e consultas de dados.

- **Técnica:** Manual e automática
- **Estágio do teste:** Unidade
- **Abordagem do teste:** Caixa branca e Caixa preta
- **Responsável:** Programador(es) ou equipe de testes

### 3.2 - Persistência de Dados

**Objetivo:** Confirmar que dados essenciais são mantidos mesmo após um encerramento inesperado do sistema, garantindo a integridade do banco de dados.

- **Técnica:** Manual e automática
- **Estágio do teste:** Sistema
- **Abordagem do teste:** Caixa preta
- **Responsável:** Programador(es) ou equipe de testes

### 3.3 - Integração dos Componentes

**Objetivo:** Verificar a integração entre os módulos, como login, consulta de notas e realização de matrícula, para assegurar que funcionam em sequência sem falhas.

- **Técnica:** Manual e automática
- **Estágio do teste:** Integração
- **Abordagem do teste:** Caixa branca e Caixa preta
- **Responsável:** Programador(es) ou equipe de testes

### 3.4 - Tempo de Resposta

**Objetivo:** Avaliar o tempo de resposta do sistema em ações críticas, como login, carregamento de notas e processamento de matrículas, visando manter a experiência do usuário satisfatória.

- **Técnica:** Manual e/ou automática
- **Estágio do teste:** Sistema
- **Abordagem do teste:** Caixa preta
- **Responsável:** Equipe de testes

### 3.5 - Animação

**Objetivo:** Verificar se animações ou transições no sistema ocorrem conforme esperado (se aplicável).

- **Técnica:** Manual e/ou automática
- **Estágio do teste:** Sistema
- **Abordagem do teste:** Caixa preta
- **Responsável:** Equipe de testes

### 3.6 - Efeitos Sonoros

Para o portal do aluno, não são previstos testes de efeitos sonoros, pois essa funcionalidade não é aplicável ao sistema.

## 4 - Recursos

### 4.1 - Ambiente de teste - Software e Hardware

**Hardware:**
- Computadores com configuração mínima de 8GB RAM, processador Intel i5 ou equivalente.
- Dispositivos móveis (smartphones e tablets) para teste de responsividade.

**Software:**
- Sistemas operacionais: Windows 10, MacOS, iOS e Android.
- Navegadores: Google Chrome, Mozilla Firefox, Safari e Microsoft Edge.
- Servidor Web: Configuração de ambiente de desenvolvimento local com Apache ou Nginx.

### 4.2 - Ferramenta de teste

- **Ferramentas de automação:** Selenium (para testes de interface), JUnit ou NUnit (para testes unitários).
- **Ferramentas de performance:** JMeter para testes de carga e stress.
- **Ferramentas de segurança:** OWASP ZAP para análise de vulnerabilidades.

## 5 - Cronograma

Tipo de teste      | Duração | data de início | data de término
-------------------|---------|----------------|-----------------
planejar teste     | 5 dias  | 01/12/2024     | 05/12/2024
projetar teste     | 7 dias  | 06/12/2024     | 13/12/2024
implementar teste  | 10 dias | 14/12/2024     | 24/12/2024
executar teste     | 10 dias | 26/12/2024     | 05/01/2025
avaliar teste      | 3 dias  | 06/01/2025     | 08/01/2025

---

Esse plano cobre as principais necessidades de testes para o portal do aluno, garantindo que as funcionalidades essenciais sejam rigorosamente testadas e que o sistema seja seguro, estável e de fácil utilização para todos os usuários.