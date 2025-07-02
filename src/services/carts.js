// quais ações meu carrinho pode fazer ?

//casos de uso 

// ✔️adicionar item  no carrinho
async function addItem(userCart, item) {
    //aqui criamos uma funçao que adiciona o item no carrinho
    userCart.push(item);//funçao para adicionar elemento

}
// =>deletar item no carrinho
async function removeItem(userCart, item) {

  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) { // <--- aqui está a correção!
    console.log("item nao encontrado");
    return;
  }
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }
  
  if(userCart[indexFound].quantity ==1){
    userCart.splice(indexFound,1)
  }
}
    
    
    

// =>remover um item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=>item.name=== name);
    if(index !== -1){
        userCart.splice(index,1)
    
   
    }
}

// => calcular o total
async function calculateTotal(useCart) {
    console.log("Shopee Carts total is ,\nSeu carrinho da Shopee e :")
    //somar todos substotais dentro de todos iens
    const resulte = useCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log( `Total💵  ${resulte}`)

}



async function displayCart(userCart) {
    console.log("Shopee cart list : \nLista de itens no carrinho:\n")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${item.name} - R${item.price} |\n${item.quantity}x | Subtotal ${item.subtotal()}\n`)
    })

}
export {
    addItem,
    calculateTotal,
    deleteItem,
     removeItem,
    displayCart,

}