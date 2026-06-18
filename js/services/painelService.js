export function getPainelAtivo(rows){

  return rows.filter(row => {

    const status =
      row.status.toUpperCase();

    return [

      "AGENDADO",
      "EM ANDAMENTO",
      "VIAGEM",
      "MANUTENÇÃO"

    ].some(s =>
      status.includes(s)
    );

  });

}
