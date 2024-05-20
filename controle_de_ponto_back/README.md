<h1>Controle de Ponto</h1>

<p>Este projeto é um sistema de controle de ponto desenvolvido em Node.js e TypeScript, utilizando o banco de dados PostgreSQL com Prisma como ORM. A aplicação segue os princípios SOLID para uma arquitetura limpa e extensível, e utiliza Jest para testes automatizados.</p>

<h2>🚀 Tecnologias: </h2>

 <div style="display: inline_block"><br>
  <a href="https://www.typescriptlang.org/" target="_BLANK">    <img align="center" alt="Ts" height="70" width="70" src="https://i.imgur.com/UIp79so.png"></a> 
  <a href="https://nodejs.org/en" target="_blank">   <img align="center" alt="node" height="70" width="70" src="https://i.imgur.com/sHP6CDY.png"></a> 
  <a href="https://www.npmjs.com/package/multer" target="_blank">   <img align="center" alt="multer" height="70" width="70" src="https://i.imgur.com/eMBoOMe.png"></a> 
  <a href="https://www.prisma.io/" target="_blank">   <img align="center" alt="prisma" height="70" width="70" src="https://i.imgur.com/fUjiKPd.png"></a> 
  <a href="https://expressjs.com/pt-br/" target="_blank">   <img align="center" alt="express" height="70" width="70" src="https://i.imgur.com/taK0j4r.png"></a> 
</div>

<h2>🚀 Modelos: </h2>
<h3>User: </h3>
<ul>
 <li>
  id
 </li>
 <li>
  nome 
 </li>
 <li>
  codigoUsuario
 </li>
 <li>
  horariosEntradaSaida
 </li>
</ul>
    
<h3>Times: </h3>
<ul>
 <li>
  id
 </li>
 <li>
  usuarioId
 </li>
 <li>
  horarioEntrada
 </li>
 <li>
  horarioSaida
 </li>
</ul>


<h2>🚀 Como Rodar os testes: </h2>
<h3>User Test: </h3>
<ul>
 <li>
  Comando: npm run test -- src/tests/usuarios/userController.test.ts
 </li>
</ul>

<h3>Times Test: </h3>
<ul>
 <li>
  Comando: npm run test -- src/tests/entradas/timesController.test.ts
 </li>
</ul>

<h2>🚀 Como Rodar a aplicacao: </h2>
<ul>
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
 <li>
  npm run start:dev
 </li>
</ul>
