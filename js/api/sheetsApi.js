const API_URL =
  "https://script.google.com/macros/s/.../exec";

export async function getSheet(sheet){

  const response =
    await fetch(
      `${API_URL}?sheet=${sheet}`
    );

  return response.json();
}
