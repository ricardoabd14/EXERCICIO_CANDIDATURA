// EXERCÍCIO 1 
function pertenceFibonacci(numero) {
    let a = 0, b = 1, c = 0;

    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    while (c < numero) {
        c = a + b;
        a = b;
        b = c;
    }

    if (c === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}

// EXERCÍCIO 2
function contarA(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

// EXERCÍCIO 3
function somaIndice() {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    return SOMA;
}

// Função principal que executa os testes
function main() {
    console.log("== Teste 1: Fibonacci ==")
    let numeroInformado = 21;  // Altere aqui o número para testar
    console.log(pertenceFibonacci(numeroInformado));

    console.log("\n== Teste 2: Contagem de 'a' em uma string ==")
    let stringParaTestar = "JavaScript é uma linguagem muito popular";
    console.log("Quantidade de letras 'a' ou 'A': " + contarA(stringParaTestar));

    console.log("\n== Teste 3: Soma do Índice ==")
    console.log("Valor final de SOMA: " + somaIndice());

    console.log("\n== Teste 4: Sequências ==")
    console.log("Próximo número na sequência (a) 1, 3, 5, 7, ...: " + 9);
    console.log("Próximo número na sequência (b) 2, 4, 8, 16, 32, 64, ...: " + 128);
    console.log("Próximo número na sequência (c) 0, 1, 4, 9, 16, 25, 36, ...: " + 49);
    console.log("Próximo número na sequência (d) 4, 16, 36, 64, ...: " + 100);
    console.log("Próximo número na sequência (e) 1, 1, 2, 3, 5, 8, ...: " + 13);
    console.log("Próximo número na sequência (f) 2, 10, 12, 16, 17, 18, 19, ...: " + 20);
}

// Teste simples: ao clicar no botão, será exibido um alerta
document.getElementById('testButton').addEventListener('click', function() {
    alert('JavaScript está funcionando!');
});


// Chama a função principal
main();
