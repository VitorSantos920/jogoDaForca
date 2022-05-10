// PARTE INICIAL
var palavras = ["abacaxi", "goiaba", "aeroporto", "ventilador", "macaco", "garrafa", "girafa", "computador", "forca", "chave", "beber", "cabelo", "janela"];

// Aleatorizar o número dos índices entre 0 e 12 (Porque o array contém 13 valores).
min = Math.ceil(0);
max = Math.floor(palavras.length - 1);
var numero_aleatorio = Math.floor(Math.random() * (max - min)) + min;


// Números de vida == Quantidade de caracteres da palavra
var vida_personagem = palavras[numero_aleatorio].length;

var palavra_secreta = palavras[numero_aleatorio];
var quantidade_letras = palavra_secreta.length;

alert("Bem vindo ao Jogo da Forca =) \nCaso não queira jogar digite 'sair'");


// Enche a array de underline
var array = [];
for (var contador = 0; contador < quantidade_letras; contador ++) { 
    array[contador] = "_";
}

console.log("Dica: A palavra possui " + palavra_secreta.length + " letras");
// FIM PARTE INICIAL

// PARTE INTERMEDIÁRIA
var achou;
var letra_escolhida = "";
while (vida_personagem > 0 && array.includes("_")) { 
    achou = false;
    letra_escolhida = prompt("Digite uma letra: ");

    if(letra_escolhida == "sair"){
        break;
    }

    for(var i = 0; i < quantidade_letras; i += 1){
        if(palavra_secreta[i] == letra_escolhida){
            array[i] = letra_escolhida;
            achou = true;
        }
    }

    if(achou == false){
        vida_personagem--;
        console.log("Você perdeu uma vida");
        console.log("Vidas restantes: " + vida_personagem);
    } else{
        console.log("Letra escolhida: " + letra_escolhida);
        console.log("Achou uma letra!");
    }

    console.log(array.join(" ") + "\n");
}
// FIM PARTE INTERMEDIÁRIA

// PARTE FINAL
if(vida_personagem > 0){
    console.log("Parabéns você acertou! =) \nA palavra é: " + palavra_secreta);
} else {
    console.log("Você perdeu! =( \nA palavra era: " + palavra_secreta + ".");
}
// FIM PARTE FINAL