function inverter(string) {
    let stringInvertida = "";

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

console.log(inverter("Teste"));
console.log(inverter("O rato roeu a roupa do rei de Roma"));
console.log(inverter("Otorrinolaringologista"));
console.log(inverter("Kaiak"));