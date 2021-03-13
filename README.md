 
<h1 align="center">&#60;elements.dom/&#62;</h1>

# 🙋‍♂️Sobre

O **elements.dom** é um módulo Javascript que seleciona os elementos HTML a partir de seus identificadores. Ele disponibiliza os seletores dos elementos selecionados em um arquivo .js para você utilizar.

> Versão 1.2.5

---

## Porque utilizar o elements.dom?

As vezes se torna cansativo escrever os seletores do html no javascript, ainda mais quando se têm muitos elementos, por isso criei uma ferramenta que pega os elementos de um arquivo html e escreve os "querySelector" em constantes já nomeadas em um arquivo javascript onde você poder utilizar sem se preocupar em linkar o script no html.

Além de ser uma ferramenta simples de se utilizar, o **elements.dom** aceita configurações em que o usuário pode editar como quiser a seleção de elementos. 

## Exemplo de input e output

> input - arquivo .html
````html
<body>
    <div class="container">
        <form>
            <input type="text" id="input_name">
            <input type="radio" name="option">
            <input type="radio" name="option">
            <button class="btn">Submit</button>
        </form>
    </div>
</body>
````

> output - arquivo .js

````js
//MAIN
const html = document.querySelector('html')
const body = document.querySelector('body')
//ID
const inputName = document.querySelector('#input_name')
//CLASS
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
//TAG
const input = document.querySelectorAll('input')
const div = document.querySelector('div')
const form = document.querySelector('form')
const button = document.querySelector('button')
//NAME
const option = document.querySelectorAll('option')
````

---
# 📒Índice

- [Como instalar](#como-instalar)

- Comandos
    - [dom](#dom)
    - [init](#init)
    - [generate](#generate)
    - [rm](#rm)
    - [crthtml](#crthtml)
    - [rmhtml](#rmhtml)
    - [version](#version)
    - [help](#help)

- Métodos
    - [watch](#watch)

- Como configurar
    - [exports](#exports)
    - [link](#link)
    - [identifiers](#identifiers)
    - [ignore](#ignore)

- [Proximas Atualizações](#proximas-atualizações)

---

# 🤜Como instalar

> ❗ Para utilizar o **elements.dom** você precisa ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/get-npm) instalados na sua máquina.

- Instale o pacote pelo npm.

````shell
$ npm install elements.dom -g
````

# 🤜Comandos

## **dom**

- O comando **dom** é o comando principal da aplicação.

- Para confirmar se o **elements.dom** está instalado digite **dom** no seu terminal e execute.

````shell
$ dom
````

- Se o pacote estiver instalado vai aparecer uma mensagem de boas vindas 🎉.

---

## **init**

````shell
$ dom init
````

- O comando **init** serve para criar o arquivo "dom.config.json"

- O "dom.config.json" é o arquivo de configuração do **elements.dom**. 

---

## **generate**

````shell
$ dom generate
````

- O **generate** é o comando que vai gerar os seletores no arquivo javascript final.

- O **generate** recebe dois **parâmetros obrigatórios**.

- O primeiro parâmetro se trata do caminho onde seu arquivo **.html** está salvo.

> Se o arquivo .html informado não existir, é criado um html a partir do caminho que você passou no primeiro parâmetro.

- O segundo parâmetro se trata do caminho onde o arquivo **.js** com os seletores vai ser salvo.

ex:
````shell
$ dom generate index.html elements.js
````

> Obs: As extensões .html e .js não são obrigatórias, o processo funciona mesmo sem as extensões. Coloquei com extensões no exemplo para não deixar dúvidas e pra ficar mais fácil de entender.

---

## **rm**

````shell
$ dom rm
````

- O comando **rm** remove o arquivo de configuração.

---

## **crthtml**

- O comando **crthtml** gera um arquivo **.html** utilizando informações de três parâmetros.

- O primeiro parâmetro recebe o caminho do arquivo **.html**

````shell
$ dom crthtml index.html
````

> Apenas o primeiro parâmetro é obrigatório

- O segundo parâmetro recebe a linguagem do html (ex: en, pt-br, etc)

````shell
$ dom crthtml index.html pt-br
````

- O terceiro parâmetro recebe entre aspas o título do html

> o título vai ficar dentro da tag &#60;title&#62; do &#60;head&#62;.

````shell
$ dom crthtml index.html pt-br "Título do HTML"
````

> O arquivo html final vai ficar assim:

````html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título do HTML</title>
</head>
<body>
    
</body>
</html>
````

- Se você usar o **crthtml** e passar no primeiro parâmetro o nome de um arquivo .html já existente, ele vai editar o html existente a partir do segundo e terceiro parâmetro. 

---

## **rmhtml**

- O comando **rmhtml** remove o arquivo **.html** especificado.

ex:

````shell
$ dom rmhtml index.html
````

---

## **version**

````shell
$ dom -v
````

- O comando **version**  mostra a versão do **elements.dom** que você está utilizando.

---

## **help**

````shell
$ dom -h
````

- O comando **help** mostra todos os comandos da aplicação e uma breve descrição de cada um.

---

# 🤜Métodos

## **watch**

- O **watch** é um método que faz com que o **elements.dom** altere seu arquivo de seletores toda vez que o arquivo **.html** for alterado. 

- Esse método sempre será utilizado junto com o comando **generate** e seus parâmetros.

ex:

````shell
$ dom generate index.html elements.js --watch
````

> ❗ Lembre-se sempre de reiniciar o watch quando o arquivo de configuração for alterado. Para reiniciar o watch aperte Ctrl + C para encerrar o processo e execute novamente.

---

# 🤜Como configurar

> Esta é a configuração padrão.👇

````json
{
    "exports": false,
    "link": true,
    "identifiers": [
        "class",
        "id",
        "tag",
        "name"
    ],
    "ignore": {
        "classes": [
            ""
        ],
        "ids": [
            ""
        ],
        "tags": [
            ""
        ],
        "names": [
            ""
        ]
    }
}
````

---

## **exports:**

````json
{
    "exports": false
}
````
O **exports** se refere à exportação dos seletores.

Se você setar o **exports** como **true** vai aparecer no seu arquivo de selectores um **export** contendo o nome de todos os seletores.

ex:

````js
export {
    html, 
    body, 
    element1,
    element2
}
````

> Por padrão o exports é definido como false

---

## **link:**

````json
{
    "link": true
}
````

O **link** se refere ao **&#60;script/&#62;** contido em seu arquivo HTML que aponta para o arquivo dos seletores.

Quando o valor do **link** é true, é criado uma tag **&#60;script/&#62;** em seu arquivo HTML em que o atributo **src** aponta para seu arquivo Javascript onde existem os seletores.

Caso contrário não é criado a tag **&#60;script/&#62;**.

> Por padrão o link é definido como true.

---

## **identifiers:**

````json
{
    "identifiers": [
        "class",
        "id",
        "tag",
        "name"
    ],
}
````

O **identifiers** se refere à quais **identificadores** você quer utilizar para selecionar elementos no seu HTML

Para customizar basta remover do array os identificadores que você não quer utilizar.

> Por padrão o identifiers já vem com todos os identificadores.

---

## **ignore:**

````json

{
    "ignore": {
        "classes": [
            ""
        ],
        "ids": [
            ""
        ],
        "tags": [
            ""
        ],
        "names": [
            ""
        ]
    }
}
````

O **ignore** se refere à quais valores de um identificador que você não quer que sejam selecionados.

### Exemplo:

- Não quero que a **class** container e btn sejam selecionadas.

- Neste caso você deve ir até o identificador **classes** e digitar os valores **container** e **btn** como uma string dentro do array.

> Você pode colocar a quantidade de valores que precisar dentro dos identificadores do ignore.

````json
{
    "ignore": {
        "classes": [
            "container",
            "btn"
        ],
        "ids": [
            ""
        ],
        "tags": [
            ""
        ],
        "names": [
            ""
        ]
    }
}
````

- Agora quero que o que o **id** input_name não seja selecionado

- Neste caso você deve ir até o identificador **ids** e digitar o valor **input_name**.

````json
{
    "ignore": {
        "classes": [
            "container",
            "btn"
        ],
        "ids": [
            "input_name"
        ],
        "tags": [
            ""
        ],
        "names": [
            ""
        ]
    }
}
````

> Por padrão o ignore não vem com nenhum elemento para ser ignorado.

---

# Proximas Atualizações✍

> Versão atual 1.2.5

 - ✅ Resolver falhas do ignore.

 - ✅ Dois identificadores novos: name e tag.

 - ✅ Utilização por terminal. Assim não será mais necessário criar um arquivo js para configurar e utilizar o módulo.

 - ✅ Método "watch" para atualizar os seletores toda vez que o HTML for editado.

 - ✅ Manipulador de arquivo html.

 - ⬜ Reescrever o pacote para typescript.

---

<p align="center">Projeto feito por <strong>Lucas Lopes Pultz</strong></p>
