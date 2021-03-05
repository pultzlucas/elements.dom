 
<h1 align="center">&ltelements.dom/&gt</h1>

# 🙋‍♂️Sobre

O **elements.dom** é um módulo Javascript que seleciona os elementos HTML a partir de seus identificadores. Ele disponibiliza os seletores dos elementos selecionados em um arquivo .js para você utilizar.

> Versão 1.1.7

---
# 📒Índice

- [Como instalar e utilizar](#Como-instalar-e-utilizar)
- Como configurar
    - [exp](#exp)
    - [iden](#iden)
    - [link](#link)
    - [ignore](#ignore)

- [Proximas Atualizações](#Proximas-Atualizações)
---

# 🤜Como instalar e utilizar

> <small>❗ Para utilizar o **elements.dom** você precisa ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/get-npm) instalados na sua máquina.</small>

- Instale o pacote pelo npm.

````console
$ npm install elements.dom
````

- Vá até a mesma pasta onde seu arquivo HTML está salvo e crie um outro arquivo (com o nome que você desejar) de extensão .js.

- Importe o **elements.dom** para dentro do arquivo javascript criado com o seguinte comando.

````js
const elementsDOM = require('elements.dom')
````

- Agora vamos gerar o arquivo com os seletores Javascript.

- Para gerar o arquivo você irá utilizar a função importada que nomeamos como elementsDOM.

- O primeiro parâmetro da função vai receber o nome do arquivo HTML.

<small>Olhe o exemplo abaixo:</small>

````js
elementsDOM('index.html')
````

- O segundo parâmetro recebe o caminho do o arquivo javascript onde que vão ficar os seletores dos elementos.

<small>Olhe o exemplo abaixo:</small>

````js
elementsDOM('index.html', 'elements.js')
````

> <small>Obs: não é necessário colocar a extensão .html e nem .js nos parâmetros, o elements.dom ja faz isso para você : )</small>

- O terceiro parâmetro recebe um objeto contendo as configurações.

> <small>Este parâmetro não é obrigatório. </small>

````js
elementsDOM('index.html', 'elements.js', {})
````

- Para rodar o programa abra o terminal e escreva o seguinte comando.

````console
$ node NOME_DO_SEU_ARQUIVO_JS.js
````
> <small>Obs: NOME_DO_SEU_ARQUIVO_JS se refere ao seu arquivo javascript onde você importou o pacote do elements.dom.</small>

> <small>No próximo tópico vão ter as instruções de como customizar as configurações.</small>

---

# 🤜Como configurar

> <small>Esta é a configuração padrão.👇</small>

````js
{
    exp: false,
    iden: ['class', 'id'],
    link: true,
    ignore: {
        classes: [''],
        ids: ['']
    }
}
````

## **exp:**

O **exp** se refere à exportação dos seletores.

````js
exp: false
````

Se você setar o **exp** como **true** vai aparecer no seu arquivo de selectores um **export** contendo o nome de todos os seletores.<br>

ex:

````js
export {html, body, element}
````

> <small>Por padrão o exp é definido como false</small>

---

## **iden:**

O **iden** se refere à quais **identificadores** você quer utilizar para selecionar elementos no seu HTML

````js
iden: ['class', 'id']
````

Para customizar basta remover do array os identificadores que você não quer utilizar.

> <small>Por padrão o iden ja vem com todos os identificadores.</small>

---

## **link:**

O **link** se refere ao **&#60;script/&#62;** contido em seu arquivo HTML que aponta para o arquivo dos seletores.

````js
link: true
````

Quando o valor do **link** é true, é criado uma tag **&#60;script/&#62;** em seu arquivo HTML em que o atributo **src** aponta para seu arquivo Javascript onde existem os seletores.<br>

Caso contrário não é criado a tag **&#60;script/&#62;**.

> <small>Por padrão o link é definido como true.</small>

---

## **ignore:**

O **ignore** se refere à quais elementos você não quer que sejam selecionados.

````js
ignore: {
    classes: [''],
    ids: ['']
}
````

E para ignorar um elemento você informa no **ignore** o seu identificador (se é classes, ids etc.) e qual é o valor desse identificador.

### Exemplo:

- Não quero que os elementos com a classe container sejam selecionados.

- Neste caso você deve informar que o identificador é **classes** e que o seu valor é **container**.

````js
ignore: {
    classes: ['container']
}
````

- Agora quero que o elemento com o id input_name não seja selecionado

- Neste caso você deve informar que o identificador é **ids** e que seu valor é **input_name**.

````js
ignore: {
    classes: ['container'],
    ids: ['input_name']
}
````
> <small>Por padrão o ignore não vem com nenhum elemento para ser ignorado.</small>

---

# Proximas Atualizações✍

 - ✅ Resolver falhas do ignore.

 - ✅ Dois identificadores novos: name e tag.

 - ⬜ Utilização por terminal. Assim não será mais necessário criar um arquivo js para configurar e utilizar o módulo.

 - ⬜ Método "watch" para atualizar os seletores toda vez que o HTML for editado.

---

<p align="center">Projeto feito por <strong>Lucas Lopes Pultz</strong></p>
