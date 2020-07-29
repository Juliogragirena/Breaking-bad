const API = "https://www.breakingbadapi.com/api/characters/";

async function fetchData(id) {
  if (id) {
    const URL = `${API}${id}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  }
  const URL = API;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
}

export default fetchData;
