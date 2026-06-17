function renderTable(headers, rows){

  return `

    <table>

      <thead>

        <tr>

          ${headers.map(h => `
            <th>${h}</th>
          `).join("")}

        </tr>

      </thead>

      <tbody>

        ${rows.map(row => {

          const values =
            (row.c || []).map(getCell);

          
const status =
  values.at(-1)?.toLowerCase() || "";

const rowClass =
  getStatusClass(status);

const icon =
  getStatusIcon(status);

return `

  <tr class="${rowClass}">

    ${values.map((v,i)=>{

      const isLast =
        i === values.length - 1;

      return `
        <td class="${isLast ? 'status-icon' : ''}">

          ${isLast ? icon : v}

        </td>
      `;
    }).join("")}

  </tr>
`;

    }).join("")}
          
      </tbody>

    </table>
  `;
}

