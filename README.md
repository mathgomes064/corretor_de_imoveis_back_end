# corretor_de_imoveis_back_end

IMPORTANTE*

Após clonar o repositório rodar o comando npm install ou yarn para instalar a node modules.

A partir daqui daqui é necessário ter o postgres instalado no computador, sendo preciso a criação de um banco de dados, bem como o Node na versão 16.0.0.

Na Raiz do projeto, crie um arquivo .env para conectar com um banco de dados postgres, no arquivo .env.example estão as variáveis necessárias.

Com o database conectado ao arquivo .env rode o seguinte comando:

-yarn typeorm migration:run -d src/data-source.ts

Em seguinda rode o comando yarn dev para rodar a aplicação.

## **CORRETOR DE IMÓVEIS API**

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

`GET /user/me - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	{
	"id": "295ea24b-b8b8-4af5-b69b-6441a54e0f56",
	"name": "Matheus Alves",
	"email": "matheus@hotmail.com",
	"senha": "$2b$10$F0KEuygkUKSgRkgyy7hy/uyuzNnyD14BS3WXIHbUvVMxFyPqIn9s.",
	"contato": "92994234883",
	"created_at": "2023-04-17T18:54:11.354Z",
	"imoveis": [
		{
			"id": "bc7fd738-c159-4a9a-8b61-d67bdcf22623",
			"status": "Em Estoque",
			"image": "url da imagem",
			"name": "Imóvel Ponta Negra",
			"description": "Casa de praia na Ponta Negra com 7 quartos",
			"valor_compra": 40000,
			"valor_venda": 50000,
			"created_at": "2023-04-17T19:11:11.319Z"
		},
	}
}
```

`PATCH /user/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"message": "Updated user",
	"updateUser": {
		"id": "9c2cde1b-d4ca-4d88-aeb5-7ad8d50c0443",
		"name": "Teste Atualizado",
		"email": "teste@hotmail.com",
		"senha": "$2b$10$4UWWrGq1EfUIgDFlZEH3AeRBi1lCxEG3SmUYUSDctBt4BUZGUDU9W",
		"contato": "40028922",
		"created_at": "2023-04-12T14:28:23.933Z"
	}
}
```

`DELETE /user/:id - FORMATO DA RESPOSTA - STATUS 200`

NO BODY FOR RESPONSE

`POST /imoveis - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "602d5516-4edf-45b2-a216-b8e8887c33bc",
	"status": "Em Estoque",
	"image": "ojm´doscvnad",
	"name": "Imóvel 3 vieira alves",
	"description": "imovel de 4 quartos no vieira alves",
	"valor_compra": 10000,
	"valor_venda": 15000,
	"created_at": "2023-04-15T11:20:56.168Z",
	"user": {
		"id": "ff1920ca-b43c-4cb5-9d8e-fc039c36b05d",
		"name": "Matheus Gomes",
		"email": "matheus@hotmail.com",
		"senha": "$2b$10$ZYOScPUaQxMvvjLqwyTo2.Hb5UkaLbLZBlaSfwb/WxNtvoQy4ralm",
		"contato": "40028922",
		"created_at": "2023-04-14T17:05:22.129Z",
		"imoveis": []
	}
}
```

`GET /imoveis/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "4484b7f5-a6cd-4591-8967-dded3180c7ed",
	"status": "Em Estoque",
	"image": "url da imagem",
	"name": "Imóvel Ponta Negra",
	"description": "Imóvel com 8 quartos",
	"valor_compra": 30000,
	"valor_venda": 40000,
	"created_at": "2023-04-15T16:37:12.076Z"
}
```

`GET /imoveis/:id/user - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "bf8650d3-8c5b-40b8-b1d0-5b67911fef8e",
		"status": true,
		"image": "https://www.salles.imb.br/admin/fotos_destaque/13232908_1604013343248088_6302168264450648482_n.jpg",
		"name": "Casa Legal",
		"description": "Uma casa legal",
		"valor_compra": 15000,
		"valor_venda": 20000,
		"created_at": "2023-04-14T21:52:10.464Z"
	},
	{
		"id": "1476a47e-6ec0-4f3a-b149-7eadd810c2a6",
		"status": true,
		"image": "https://www.decorfacil.com/wp-content/uploads/2015/04/imagem-220.jpg",
		"name": "Outra casa legal",
		"description": "Outra casa trop",
		"valor_compra": 20000,
		"valor_venda": 30000,
		"created_at": "2023-04-14T21:53:52.557Z"
	}
]
```

`PATCH /imoveis/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"message": "Updated Imovel",
	"updateImovel": {
		"id": "81fae090-3583-4411-bf9c-cd7eb0559d59",
		"status": true,
		"image": "ojm´doscvnad",
		"name": "Imóvel 1 vieira alves",
		"description": "imovel de 4 quartos no vieira alves",
		"valor_compra": 10000,
		"valor_venda": 20000,
		"created_at": "2023-04-12T18:50:47.224Z"
	}
}
```

`DELETE /imoveis/:id - FORMATO DA RESPOSTA - STATUS 200`

NO BODY FOR RESPONSE
