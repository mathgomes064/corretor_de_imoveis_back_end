# corretor_de_imoveis_back_end

IMPORTANTE*

Após clonar o repositório rodar o comando npm install ou yarn para instalar a node modules.

A partir daqui daqui é necessário ter o postgres instalado no computador, sendo preciso a criação de um banco de dados.

Na Raiz do projeto, crie um arquivo .env para conectar com um banco de dados postgres, no arquivo .env.example estão as variáveis necessárias.

Com o database conectado ao arquivo .env rode os seguintes comandos:

-yarn typeorm migration:create src/migrations/initialMigration

-yarn typeorm migration:generate src/migrations/generateTables -d src/data-source.ts

-yarn typeorm migration:run -d src/data-source.ts

Em seguinda rode o comando yarn dev para rodar a aplicação.