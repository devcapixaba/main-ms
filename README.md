
# 📖 README - Main MS

Este é o serviço principal do microsserviço, que pode ser integrado com o **BFF Service** para fornecer a funcionalidade desejada.

## 🔧 Passos para instalação e execução no Docker

### 1. Clonar o repositório
Primeiro, clone o repositório do serviço principal.

```bash
git clone https://github.com/devcapixaba/main-ms.git
cd main-ms
```

### 2. Instalar dependências
Instale as dependências do projeto.

```bash
npm install
```

### 3. Criar uma rede compartilhada
Crie uma rede Docker para que os serviços se comuniquem (caso não exista a rede já criada junto ao bff service)

```bash
docker network create shared-network
```

### 4. Build do Docker
Crie a imagem do Docker para o serviço principal.

```bash
docker-compose up --build
```

### 5. Subir o serviço principal no Docker
Execute o serviço principal no Docker, conectando-o à rede compartilhada.

```bash
docker network connect shared-network main-ms-app-1
```

### 6. Acessar o swagger doc
O serviço principal estará acessível em:  
[http://localhost:3000/api/docs](http://localhost:3000/api/docs)
