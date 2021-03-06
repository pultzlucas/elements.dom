 
<h1 align="center">&#60;elements.dom/&#62;</h1>

# 🙋‍♂️Sobre

O **elements.dom** é um módulo Javascript que seleciona os elementos HTML a partir de seus identificadores. Ele disponibiliza os seletores dos elementos selecionados em um arquivo .js para você utilizar.

> Versão 1.1.9

---
# 📒Índice

- [Como instalar](#Como-instalar)

- Comandos
    - [dom](#dom)
    - [init](#init)
    - [generate](#generate)
    - [rm](#rm)
    - [version](#version)
    - [help](#help)

- Como configurar
    - [exports](#exports)
    - [link](#link)
    - [identifiers](#identifiers)
    - [ignore](#ignore)

- [Proximas Atualizações](#Proximas-Atualizações)
---

# 🤜Como instalar

> <small>❗ Para utilizar o **elements.dom** você precisa ter o <a href="https://nodejs.org/en/" target="_blank">Node.js</a> e o <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a> instalados na sua máquina.</small>

- Instale o pacote pelo npm.

````shell
$ npm install elements.dom
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

- O comando **init** serve para criar o arquivo "dom.config.json", esse é o arquivo de configuração do **elements.dom**. 

> ❗ Sem o arquivo de configuração o elements.dom não funciona.

---

## **generate**

````shell
$ dom generate
````

- O comando **generate** é o método que vai gerar os seletores no arquivo javascript final.

- O **generate** recebe dois **parâmetros obrigatórios**.

- O primeiro parâmetro se trata do caminho onde seu arquivo **.html** está salvo.

- O segundo parâmetro se trata do do caminho onde o arquivo **.js** com os seletores vai ser salvo.

ex:
````shell
$ dom generate index.html elements.js
````

> <small>Obs: As extensões .html e .js não são obrigatórias, o processo funciona mesmo sem as extensões. Coloquei com extensões no exemplo para não deixar dúvidas e pra ficar mais fácil de entender.</small>

---

## **rm**

````shell
$ dom rm
````

- O comando **rm** remove o arquivo de configuração.

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

# 🤜Como configurar

> <small>Esta é a configuração padrão.👇</small>

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

## **exports:**

````json
{
    "exports": false
}
````
O **exports** se refere à exportação dos seletores.

Se você setar o **exports** como **true** vai aparecer no seu arquivo de selectores um **export** contendo o nome de todos os seletores.<br>

ex:

````js
export {
    html, 
    body, 
    element1,
    element2
}
````

> <small>Por padrão o exp é definido como false</small>

---

## **link:**

````json
{
    "link": true
}
````

O **link** se refere ao **&#60;script/&#62;** contido em seu arquivo HTML que aponta para o arquivo dos seletores.

Quando o valor do **link** é true, é criado uma tag **&#60;script/&#62;** em seu arquivo HTML em que o atributo **src** aponta para seu arquivo Javascript onde existem os seletores.<br>

Caso contrário não é criado a tag **&#60;script/&#62;**.

> <small>Por padrão o link é definido como true.</small>

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

> <small>Por padrão o iden ja vem com todos os identificadores.</small>

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

O **ignore** se refere à quais elementos você não quer que sejam selecionados.

E para ignorar um elemento você informa no **ignore** o seu identificador (se é classes, ids etc.) e qual é o valor desse identificador.

### Exemplo:

- Não quero que os elementos com a classe container sejam selecionados.

- Neste caso você deve informar que o identificador é **classes** e que o seu valor é **container**.

````json
{
    "ignore": {
        "classes": ["container"]
    }
}
````

- Agora quero que o elemento com o id input_name não seja selecionado

- Neste caso você deve informar que o identificador é **ids** e que seu valor é **input_name**.

````json
{
    "ignore": {
        "classes": ["container"],
        "ids": ["input_name"]
    }
}
````

> <small>Por padrão o ignore não vem com nenhum elemento para ser ignorado.</small>

---

# Proximas Atualizações✍

> Versão atual 1.1.9

 - ✅ Resolver falhas do ignore.

 - ✅ Dois identificadores novos: name e tag.

 - ✅ Utilização por terminal. Assim não será mais necessário criar um arquivo js para configurar e utilizar o módulo.

 - ⬜ Método "watch" para atualizar os seletores toda vez que o HTML for editado.

---

<p align="center">Projeto feito por <strong>Lucas Lopes Pultz</strong></p>
