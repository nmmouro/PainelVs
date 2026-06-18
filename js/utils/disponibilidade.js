function getDisponibilidade(nome, painelRows, tipo){

  const procurado =
    String(nome || "").trim().toUpperCase();

  for(const row of painelRows){

    const valores =
      (row.c || []).map(getCell);

    const veiculo =
      String(valores[3] || "").trim().toUpperCase();

    const motorista =
      String(valores[2] || "").trim().toUpperCase();

    const status =
      String(valores[6] || "").trim().toUpperCase();

    const encontrado =
      tipo === "veiculo"
        ? veiculo === procurado
        : motorista === procurado;

    if(!encontrado){
      continue;
    }

    // MANUTENÇÃO
    if(
      status.includes("MANUTENÇÃO") ||
      status.includes("MANUTENCAO")
    ){

      if(tipo === "veiculo"){
        return '<span class="manutencao">🔵 MANUTENÇÃO</span>';
      }

      return '<span class="livre">🟢 LIVRE</span>';
    }

    // VIAGEM
    if(status.includes("VIAGEM")){
      return '<span class="viagem">🟣 VIAGEM</span>';
    }

    // OCUPADO
    return '<span class="ocupado">🔴 OCUPADO</span>';
  }

  return '<span class="livre">🟢 LIVRE</span>';
}  
