function renderMotoristas(rows, painelRows, linhaFlutuante){

  return `

    <table>

      <thead>
        <tr>
          <th>Motorista</th>
          <th>Status</th>
          <th>Condição</th>
          
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
    "motorista"
)}
              </td>

              <td>
                ${v[2] || ""}
              </td>

            </tr>

          `;

        }).join("")}

        ${linhaFlutuante}

      </tbody>

    </table>

  `;
}
