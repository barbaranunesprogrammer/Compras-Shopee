# 🛒 Carrinho de Compras Simples

Este é um projeto simples de um sistema de carrinho de compras, desenvolvido em JavaScript puro (Node.js). Ele simula as operações básicas de um e-commerce, como adicionar, remover e calcular o total de itens em um carrinho.

## ✨ Funcionalidades

- ✔️ **Criar itens**: Crie objetos de item com nome, preço e quantidade.
- ✔️ **Adicionar itens**: Adicione itens a um carrinho de compras.
- ✔️ **Remover itens (por unidade)**: Reduz a quantidade de um item. Se a quantidade chegar a zero, o item é removido do carrinho.
- ✔️ **Deletar itens**: Remove um item completamente do carrinho, independentemente da quantidade.
- ✔️ **Calcular total**: Soma o subtotal de todos os itens para obter o valor total do carrinho.
- ✔️ **Exibir carrinho**: Mostra uma lista formatada de todos os itens no carrinho, suas quantidades e subtotais.

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Node.js**

## 🚀 Como Usar

### Pré-requisitos

- Ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina.

### Instalação

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/carrinho-de-compras.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd carrinho-de-compras
   ```

### Executando o Projeto

O projeto é modularizado em serviços. Para ver o carrinho em ação, você pode criar um arquivo de entrada, como `index.js`, na raiz do projeto e importar as funções.

**Exemplo de `index.js`:**

```javascript
// Crie este arquivo na raiz do projeto (ex: index.js)
import createItem from './src/services/item.js';
import * as cartService from './src/services/carts.js';

async function main() {
    console.log("🛍️  Bem-vindo ao seu carrinho de compras!\n");

    // 1. Criar um carrinho vazio
    const myCart = [];

    // 2. Criar alguns itens
    const item1 = await createItem("Hot-Wheels", 20.99, 2);
    const item2 = await createItem("Action Figure", 55.50, 1);
    const item3 = await createItem("T-shirt", 49.90, 3);

    // 3. Adicionar itens ao carrinho
    await cartService.addItem(myCart, item1);
    await cartService.addItem(myCart, item2);
    await cartService.addItem(myCart, item3);

    // 4. Exibir o carrinho
    await cartService.displayCart(myCart);

    // 5. Remover uma unidade de um item
    console.log("\n➡️  Removendo 1 unidade do item 'T-shirt'...");
    await cartService.removeItem(myCart, { name: "T-shirt" });
    await cartService.displayCart(myCart);

    // 6. Deletar um item completamente
    console.log("\n➡️  Deletando o item 'Action Figure'...");
    await cartService.deleteItem(myCart, "Action Figure");
    await cartService.displayCart(myCart);

    // 7. Calcular o total final
    await cartService.calculateTotal(myCart);
}

main();
```

Para executar o exemplo acima, salve o código e rode o seguinte comando no seu terminal:

```bash
node index.js
```


