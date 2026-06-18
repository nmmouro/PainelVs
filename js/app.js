import { TABS } from "./config/tabs.js";
import { getSheet } from "./api/sheetsApi.js";

async function load(){

  const dados =
    await Promise.all(

      TABS.map(tab =>
        getSheet(tab.sheet)
      )

    );

  renderDashboard(dados);
}

load();

setInterval(
  load,
  30000
);
