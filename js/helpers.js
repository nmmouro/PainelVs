const parseGviz = txt =>

  JSON.parse(
    txt.substring(
      txt.indexOf("{"),
      txt.lastIndexOf("}") + 1
    )
  );

/* 🔹 extrai valor da célula */
const getCell = c =>
  c?.f ?? c?.v ?? "";


  
function formatarData(valor){

  if(!valor) return "";

  if(valor instanceof Date){
    return valor.toLocaleDateString("pt-BR");
  }

  const texto = String(valor);

  const match =
    texto.match(/\d{1,2}\/\d{1,2}\/\d{4}/);

  if(match){
    return match[0];
  }

  return texto;
}
  
  

/* 🔹 identifica chave do status */
function getStatusKey(status=""){

  status = status
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"");

  if(status.includes("manutencao"))
    return "manutenção";

  if(status.includes("viagem"))
    return "viagem";

  if(status.includes("andamento"))
    return "andamento";

  if(status.includes("atendido"))
    return "atendido";

  if(status.includes("concluido"))
    return "concluido";

  if(status.includes("cancelado"))
    return "cancelado";

  return null;
}
  
/* 🔹 retorna classe CSS */
function getStatusClass(status){

  const key =
    getStatusKey(status);

  return STATUS[key]?.class || "";
}

/* 🔹 retorna ícone */
function getStatusIcon(status){

  const key =
    getStatusKey(status);

  return STATUS[key]?.icon || "";
}
