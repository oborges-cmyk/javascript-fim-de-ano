var a;

console.log("o valor de a é: " + a);
/* undefined - porque você declaru a variável mas não atribiu nenhum valor, então o valor dela é indefinido.
*/

console.log("o valor de b é: " + b);
/* 
ReferenceError - porque você não declarou a variável b, então o interpretador não sabe o que é b.
*/

// Conditional statements

var input;

if (input === undefined) {
    facaIsto (); 
 } else {
    facaAquilo ();
}