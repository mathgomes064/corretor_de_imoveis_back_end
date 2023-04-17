# corretor_de_imoveis_back_end

IMPORTANTE*

Após clonar o repositório rodar o comando npm install ou yarn para instalar a node modules.

A partir daqui daqui é necessário ter o postgres instalado no computador, sendo preciso a criação de um banco de dados, bem como o Node na versão 16.0.0.

Na Raiz do projeto, crie um arquivo .env para conectar com um banco de dados postgres, no arquivo .env.example estão as variáveis necessárias.

Com o database conectado ao arquivo .env rode o seguinte comando:

-yarn typeorm migration:run -d src/data-source.ts

Em seguinda rode o comando yarn dev para rodar a aplicação.

CORRETOR DE IMÓVEIS API

Este é o backend da aplicação do corretor de imoveis.

ulr base da Api = https://corretor-de-imoveis.onrender.com 

## **Endpoints**

`POST /user - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "295ea24b-b8b8-4af5-b69b-6441a54e0f56",
	"name": "Matheus Gomes",
	"email": "matheus@hotmail.com",
	"senha": "$2b$10$5zr1upL/1uWEvTRmqlJb6u0XyDfNgpzr9sAo6fTaIYAq6pCqMfK0y",
	"contato": "40028922",
	"created_at": "2023-04-17T18:54:11.354Z"
}
```

