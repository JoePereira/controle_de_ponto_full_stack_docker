<h1>Controle de Ponto aplicacao fullstack com docker</h1>

<p>Este projeto é um sistema de controle de ponto fullstack desenvolvido em Node.js e TypeScript, utilizando o banco de dados PostgreSQL com Prisma como ORM e utiliza Jest para testes automatizados para o back-end e next.js tailwind typescript e axios no front-end. A aplicação segue os princípios SOLID para uma arquitetura limpa e extensível.</p>

<h2>🚀 Tecnologias: </h2>

 <div style="display: inline_block"><br>
  <a href="https://www.typescriptlang.org/" target="_BLANK">    <img align="center" alt="Ts" height="70" width="70" src="https://i.imgur.com/UIp79so.png"></a> 
  <a href="https://nodejs.org/en" target="_blank">   <img align="center" alt="node" height="70" width="70" src="https://i.imgur.com/sHP6CDY.png"></a> 
  <a href="https://www.prisma.io/" target="_blank">   <img align="center" alt="prisma" height="70" width="70" src="https://i.imgur.com/fUjiKPd.png"></a> 
  <a href="https://expressjs.com/pt-br/" target="_blank">   <img align="center" alt="express" height="70" width="70" src="https://i.imgur.com/taK0j4r.png"></a> 
  <a href="https://jestjs.io/pt-BR/" target="_BLANK"><img align="center" alt="Prettier" height="70" width="70" src="https://w7.pngwing.com/pngs/152/247/png-transparent-jest-hd-logo.png"></a>
  <a href="https://www.docker.com/get-started/" target="_BLANK"><img align="center" alt="Prettier" height="70" width="70" src="https://logopng.com.br/logos/docker-27.png"></a>
  
   <div style="display: inline_block"><br>
    <a href="https://nextjs.org/" target="_BLANK"><img align="center" alt="Next.js" height="70" width="70" src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"></a> 
    <a href="https://reactjs.org/" target="_BLANK"><img align="center" alt="React" height="70" width="80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></a> 
    <a href="https://www.typescriptlang.org/" target="_BLANK"><img align="center" alt="TypeScript" height="70" width="70" src="https://i.imgur.com/UIp79so.png"></a> 
    <a href="https://tailwindcss.com/" target="_BLANK"><img align="center" alt="Tailwind CSS" height="70" width="70" src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdxy1c2bvl6odeo52dodk.jpg"></a>
   <a href="https://eslint.org/" target="_BLANK"><img align="center" alt="ESLint" height="70" width="100" src="https://e7.pngegg.com/pngimages/518/938/png-clipart-eslint-logo-tech-companies.png"></a>
    <a href="https://prettier.io/" target="_BLANK"><img align="center" alt="Prettier" height="70" width="70" src="https://w7.pngwing.com/pngs/164/151/png-transparent-prettier-hd-logo.png"></a>
  
</div>

<h2>🚀 Como Rodar a aplicacao: </h2>
<ol>
 <li>
  git clone https://github.com/JoePereira/controle_de_ponto_full_stack_docker.git
 </li>
 <li>
  acesse a posta do projeto controle_de_ponto_fullstack
 </li>
 <li>
  docker compose build
 </li>
 <li>
  docker compose up
 </li>
 <li>
  <a href="http://localhost:3000">http://localhost:3000</a>
 </li>
</ol>

<h2>🚀 Como Rodar os testes: </h2>

<h4>Para rodar os testes sera necessario parar o container do docker e rodar a aplicacao localmente para nao termos problemas com conexao de porta. Siga o passo a passo</h4>
<ol>
 <li>
  no terminal digite o comando: docker stop controle_de_ponto_backend (se o container estiver rodando)
 </li>
 <li>
  acesse a pasta controle_de_ponto_back
 </li>
  <li>
  npm install
 </li>
 <li>
  cd src/shared/infra
 </li>
 <li>
  npx prisma generate
 </li>
 <li>
  cd ../../..
  </li>
 </li>
 <li>
  (Para rodar o teste das rotas do usuario utilizadas no sistema) Comando: npm run test -- src/tests/entradas/timesController.test.ts
 </li>
 <li>
  (Para rodar o teste das rotas de horarios utilizadas no sistema) Comando: npm run test -- src/tests/entradas/timesController.test.ts
 </li>
</ol>




