# Template Service

Este é um modelo para construção de microserviços.

## Como executá-lo? (Usando Linux como referência)

Obs.: Algumas versões de linux usam "python3" no lugar de "python" é possível testar qual é o comando correto com:

```bash
  python --version
```

O retorno esperado é semelhante a:

> Python 3.10.12

Use o comando que funcionar.

### 1. (Opicional) Inicie uma virtual env para instalação dos pacotes do projeto

  1.1. Inicie a venv, com o terminal, na pasta __**/backend/services/service-template**__:

   ```bash
   python -m venv .venv
   ```

  1.2. Ative a venv para usar o python através dela:

   ```bash
   source .venv/bin/activate
   ```

  1.3. Instale os pacotes listados no arquivo requirements.txt:

   ```bash
   python -m pip install -r requirements.txt
   ```

### 2. Inicie o projeto (Escolha apenas uma opção), com o terminal, na pasta __**/backend/services/service-template**__

   2.1. (Opção 1) Usando o script preparado:

   ```bash
   scripts/run.sh
   ```


  2.2. (Opção 2) Usando um comando direto:

     ```bash
     python main.py
     ```


### 3. Teste a saúde do servidor

   3.1. Usando um cliente HTTP de sua escolha, faça uma requisição do tipo GET para:

   > http://localhost:8080

