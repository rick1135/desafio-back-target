const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "dados.json");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  try {
    const dados = JSON.parse(data);

    const valoresFiltrados = dados
      .map((item) => item.valor)
      .filter((valor) => valor > 0);

    const menorValor = Math.min(...valoresFiltrados);
    const maiorValor = Math.max(...valoresFiltrados);
    const somaFaturamento = valoresFiltrados.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaFaturamento / valoresFiltrados.length;
    const diasAcimaMedia = valoresFiltrados.filter((valor) => valor > mediaMensal).length;

    console.log(`Menor faturamento em um dia: ${menorValor.toFixed(2)}`);
    console.log(`Maior faturamento em um dia: ${maiorValor.toFixed(2)}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaMedia} dias`);
  } catch (parseError) {
    console.error("Erro ao converter o arquivo JSON:", parseError);
  }
});
