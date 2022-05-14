var teste = "";
var palavras = ["doctype", "script", "javascript", "logica", "loops", "condicionais", "algoritmo", "fluxograma", "string", "inteiro", "variaveis", "booleano", "concatenacao", "operadores", "programacao", "sintaxe", "prompt", "alert", "array", "funcao", "console", "debugger", "body", "head", "atributos", "length", "includes", "parsefloat", "title", "identacao"];

min = Math.ceil(0);
max = Math.floor(palavras.length - 1);
var numero_aleatorio = Math.floor(Math.random() * (max - min)) + min;

var vida_personagem = palavras[numero_aleatorio].length;

var palavra_secreta = palavras[numero_aleatorio];
var quantidade_letras = palavra_secreta.length;

alert("Bem vindo ao Jogo da Forca =) \nCaso não queira jogar digite 'sair'");

var array = [];
for (var contador = 0; contador < quantidade_letras; contador++) {
    array[contador] = "_";
}

console.log("Dica: A palavra possui " + palavra_secreta.length + " letras\n\n");

var achou;
var letra_escolhida = "";
while (vida_personagem > 0 && array.includes("_")) {
    achou = false;
    letra_escolhida = prompt("Digite uma letra: ");

    if (letra_escolhida == "sair") {
        console.log("Saiu? Poxa, tudo bem então...")
        break;
    }

    for (var i = 0; i < quantidade_letras; i += 1) {
        if (palavra_secreta[i] == letra_escolhida) {
            array[i] = letra_escolhida;
            achou = true;
        }
    }

    console.log("\nLETRA ESCOLHIDA: " + letra_escolhida + "\n");

    if (achou == false) {
        vida_personagem--;
        console.log("Esta letra não existe na palavra, tente de novo!");
        console.log("Você perdeu uma vida!\n");
        console.log("Vidas restantes: " + vida_personagem + "\n\n");
    } else {
        console.log("Boa, achou uma letra, vá em frente!\n\n");
    }
    console.log(array.join(" ") + "\n\n");
}

if (vida_personagem > 0 && array.includes("_") == false) {
    console.log("Parabéns você acertou! =) \nA palavra é: " + palavra_secreta);
} else if (letra_escolhida == "sair") {
    console.log("Por isso, não vou revelar a #PalavraSecreta! =)");
} else {
    console.log("Você perdeu! =( \nA palavra era: " + palavra_secreta + ".");
}