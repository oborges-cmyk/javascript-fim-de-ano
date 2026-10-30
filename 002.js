//Criando a função para criar o array de números.

function calculoImc(peso,altura) {
    let imc = peso / (altura * altura);
    //return imc; sem fixar o tamanho do número de casas decimais.
    return imc.toFixed(2); //retorna o imc com duas casas decimais,
    }