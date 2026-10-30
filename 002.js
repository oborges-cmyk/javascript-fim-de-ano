//Criando a função para criar o array de números.

function calculoImc(peso,altura) {
    let imc = peso / (altura * altura);
    //return imc; sem fixar o tamanho do número de casas decimais.
    return imc.toFixed(2); //retorna o imc com duas casas decimais,
    }

console.log("IMC para 70 kg e 1.75m: " +
calculoImc(70, 1.75));
console.log("IMC da Ana: " +
calculoImc(55, 1.60));