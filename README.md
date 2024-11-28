
# 📖 README - Main MS

Este é o serviço principal do microsserviço, que pode ser integrado com o **BFF Service** para fornecer a funcionalidade desejada.

## 🔧 Passos para instalação e execução no Docker

### 1. Clonar o repositório
Primeiro, clone o repositório do serviço principal.

```bash
git clone <URL-DO-REPOSITORIO-MAIN-SERVICE>
cd <PASTA-DO-SERVIÇO-PRINCIPAL>
```

### 2. Instalar dependências
Instale as dependências do projeto.

```bash
npm install
```

### 3. Criar uma rede compartilhada
Crie uma rede Docker para que os serviços se comuniquem.

```bash
docker network create shared-network
```

### 4. Build do Docker
Crie a imagem do Docker para o serviço principal.

```bash
docker build -t main-service .
```

### 5. Subir o serviço principal no Docker
Execute o serviço principal no Docker, conectando-o à rede compartilhada.

```bash
docker run --network shared-network -p 3000:3000 --name main-service main-service
```

### 6. Acessar o serviço principal
O serviço principal estará acessível em:  
[http://localhost:3000](http://localhost:3000)
