
# Trabalho de teste de software.

## Rodando localmente

Clone o projetos

```bash
  git clone https://github.com/MuriloRibg/Trabalho-teste-software.git
```

Entre no diretório do projeto

```bash
  cd Trabalho-teste-software
```

Instale as dependências

```bash
  npm install
```

Inicie o cypress

```bash
  npx cypress open
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar passar variáveis ​​de ambiente como opções ao usar a ferramenta CLI.

<div style="border: 1px solid #f0c36d; background-color: #fff9e6; padding: 10px; border-radius: 5px; font-size: 14px; color: black;">
Vários valores podem ser separados por uma vírgula, não um espaço. Em alguns shells, como o Windows PowerShell, pode ser necessário colocar o par chave/valor entre aspas: 
</br><code>--env "matricula=dummyUser,senha=dummyPassword"</code>.
</div>

</br>

Para executar os testes e preencher as variáveis de ambiente: 
```bash
npx cypress open --env matricula=valor,senha=valor,url_site=https://aluno.uvv.br/
```


## Documentação cypress

- [E2E](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test)
- [Variáveis de Ambiente](https://docs.cypress.io/app/references/environment-variables#__docusaurus_skipToContent_fallback)
