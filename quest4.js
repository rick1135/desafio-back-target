function calcularFaturamento() {
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  let faturamentoTotal = 0;
  for (const estado in faturamento) {
    faturamentoTotal += faturamento[estado];
  }

  let resultado = "Percentual de faturamento por estado:\n";
  for (const estado in faturamento) {
    resultado += `${estado}: ${(
      (faturamento[estado] / faturamentoTotal) *
      100
    ).toFixed(2)}%\n`;
  }
  return resultado;
}

console.log(calcularFaturamento());