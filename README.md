<div align="center">
  <img src="https://github.com/alexandresjunior/curso-angular/assets/83607914/9414e2da-49d4-482d-9dca-0cd27a159c74" alt="Taskify com Angular" />
</div>

## Descrição do Projeto
Taskify é uma aplicação frontend simples desenvolvida em Angular para armazenamento de tarefas com dia e hora definidos. Este projeto visa proporcionar uma maneira fácil e organizada de gerenciar suas tarefas diárias.

## Estrutura do Projeto
```
/src
  ├── /app
  │     ├── /components
  │     │     ├── /add-task
  │     │     │     ├── add-task.component.css
  │     │     │     ├── add-task.component.html
  │     │     │     ├── add-task.component.spec.ts
  │     │     │     ├── add-task.component.ts
  │     │     ├── /button
  │     │     ├── /footer
  │     │     ├── /header
  │     │     ├── /button
  │     │     ├── /task-item
  │     ├── /interfaces
  │     ├── /mocks
  │     ├── /pages
  │     │     ├── /about
  │     │     ├── /tasks
  │     │     │     ├── tasks.component.css
  │     │     │     ├── tasks.component.html
  │     │     │     ├── tasks.component.spec.ts
  │     │     │     ├── tasks.component.ts
  │     ├── /services
  │     │     ├── task.service.spec.ts
  │     │     ├── task.service.ts
  │     │     ├── ui.service.spec.ts
  │     │     ├── ui.service.ts
  │     ├── /utils
  │     ├── app.component.css
  │     ├── app.component.html
  │     ├── app.component.spec.ts
  │     ├── app.component.ts
  │     ├── app.config.ts
  │     ├── app.routes.ts
  │     ├── assets
  │     ├── index.html
  │     ├── main.ts
  │     ├── styles.css
  ├── angular.json
  ├── db.json
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── tsconfig.app.json
  ├── tsconfig.json
  ├── tsconfig.spec.json
```

## Pré-requisitos
Certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina:

* Angular CLI: 17.3.7
* Node.js: 20.12.2
* npm: 10.7.0

## Instalação
1. Clone o repositório do projeto:
```
git clone https://github.com/seu-usuario/taskify.git
cd taskify
```
2. Instale as dependências do projeto:
```
npm install
```

## Executando a Aplicação
Para iniciar o servidor de desenvolvimento e ver a aplicação em execução, execute:
```
ng serve
```
Abra o navegador e acesse `http://localhost:4200/`.

## Scripts Disponíveis
* `ng serve`: Inicia o servidor de desenvolvimento.
* `ng build`: Compila a aplicação para produção na pasta dist/.
* `ng test`: Executa os testes unitários via Karma.
* `ng lint`: Executa a verificação de linting no código.

## Contribuindo
1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Envie para o branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
