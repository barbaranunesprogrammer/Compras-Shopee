import createItem from "./services/item.js";
import * as cartService from "./services/carts.js"

const myCart = [];
// const myWhishList=[];

console.log ("Welcome to the your Shopee Cart!\nBem-Vindo ao seu carrinho da Shopee!\n")

const item1 = await createItem("Funko Pop",90.99,1);// tive que usar o await para esperar ele criar o item e depois mostrar o subtotal
const item2 = await createItem("Funko Pop Dobby",90.50,3); // aqui ta o item e o valor e a quantidade

await cartService.addItem(myCart,item1); //adiciona o item ao carrinho de compras 
await cartService.addItem(myCart,item2);
await cartService.removeItem(myCart,item2)

await cartService.removeItem(myCart,item2)//remove um item 
await cartService.removeItem(myCart,item2)//remove outro item 
//await cartService.deleteItem(myCart,item2.name)


await cartService.displayCart(myCart)




await cartService.calculateTotal(myCart); 


