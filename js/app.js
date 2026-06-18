let lastHash = "";
let firstLoad = true;

async function loadAll(){

  const app =
    document.getElementById("app");

  try{

    const results =
      await Promise.all(

        TABS.map(
          t => fetchSheet(t.sheet)
        )
      );

    const hash =
      JSON.stringify(results);

    if(
      !firstLoad &&
      hash !== lastHash
    ){
      playBeep();
    }

    firstLoad = false;
    lastHash = hash;

app.innerHTML = "";
