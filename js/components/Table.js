export function Table(
  headers,
  rows
){

  return `

  <table>

    <thead>
      <tr>
        ${headers.map(h =>
          `<th>${h}</th>`
        ).join("")}
      </tr>
    </thead>

    <tbody>

      ${rows.map(row => `

        <tr>

          ${row.map(col => `
            <td>${col}</td>
          `).join("")}

        </tr>

      `).join("")}

    </tbody>

  </table>

  `;

}
