function renderVeiculos(rows, painelRows){

  return `

    <table>

      <thead>
        <tr>
          <th>Placa</th>
          <th>Status</th>
          <th>Odômetro</th>
          <th>Combustível</th>
        </tr>
      </thead>

      <tbody>

        ${rows.map(row => {

          const v =
            (row.c || []).map(getCell);

          return `

            <tr>

              <td>
                <strong>${v[0] || ""}</strong>
              </td>

              <td>
                ${getDisponibilidade(
    v[0],
    painelRows,
    "veiculo"
)}
              </td>

              <td>
                ${v[2] || ""} km
              </td>

              <td>
                ⛽ ${v[3] || ""}
              </td>

            </tr>

          `;

        }).join("")}

      </tbody>

    </table>

  `;

}
