// 001.js
// Construindo uma lista de compras
let listaDeCompras = ["Arroz","Feijão","Macarrão", "Leite", "Ovos"];

// Adicionando itens à lista
listaDeCompras.push("Pão","Manteiga");

coonsole.log("Lista de compras:",listaDeCompras);
console.log('Total de itens na lista:' + listaDeCompras.length);

// listando todos os itens da lista
listaDeCommpras.forEach(function(item)
{
console.log("_" + item);
});