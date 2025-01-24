function fibonacci(valor) {
    let a = 0, b = 1;

    if (valor === 0 || valor === 1) {
        return `O número ${valor} pertence a sequência de Fibonacci`;
    }

    while (b < valor) {
        let aux = a;
        a = b;
        b = aux + b;
    }

    return b === valor ? `O número ${valor} pertence a sequência de Fibonacci` : `O número ${valor} não pertence a sequência de Fibonacci`;
}

function aleatorio() {
    return Math.floor(Math.random() * 999);
}

const valor = aleatorio();
console.log(`Número escolhido aleatoriamente foi: ${valor}`);
console.log(fibonacci(valor));
